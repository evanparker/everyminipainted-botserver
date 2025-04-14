var express = require("express");
const { getMini } = require("../services/mini");
var router = express.Router();

const cloudName = process.env.VITE_CLOUD_NAME || "ddl3gn9nh";

/* GET minis. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Every Mini Painted" });
});

/* GET mini. */
router.get("/:id", async function (req, res, next) {
  try {
    const mini = await getMini(req.params.id);
    const thumbnailImageURL = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto/q_auto:good/c_fill,h_628,w_1200/${mini.images[0].cloudinaryPublicId}`;
    res.render("things/thing", {
      title: `EMP - ${mini.name}`,
      description: mini.description,
      thumbnailImageURL,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
