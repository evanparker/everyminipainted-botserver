var express = require("express");
const { getFigure } = require("../services/figure");
var router = express.Router();

const cloudName = process.env.VITE_CLOUD_NAME || "ddl3gn9nh";

/* GET figures. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Every Mini Painted" });
});

/* GET figure. */
router.get("/:id", async function (req, res, next) {
  try {
    const figure = await getFigure(req.params.id);
    const thumbnailImageURL = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto/q_auto:good/c_fill,h_628,w_1200/${figure.images[0].cloudinaryPublicId}`;
    res.render("things/thing", {
      title: `EMP - ${figure.name}`,
      description: figure.description,
      thumbnailImageURL,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
