var express = require("express");
const { getManufacturer } = require("../services/manufacturer");
var router = express.Router();

const cloudName = process.env.VITE_CLOUD_NAME || "ddl3gn9nh";

/* GET manufacturers. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Every Mini Painted" });
});

/* GET manufacturer. */
router.get("/:id", async function (req, res, next) {
  try {
    const manufacturer = await getManufacturer(req.params.id);
    const thumbnailImageURL = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto/q_auto:good/c_fill,h_628,w_1200/${manufacturer.images[0].cloudinaryPublicId}`;
    res.render("things/thing", {
      title: `EMP - ${manufacturer.name}`,
      description: manufacturer.description,
      thumbnailImageURL,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
