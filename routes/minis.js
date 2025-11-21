var express = require("express");
const { getMini } = require("../services/mini");
const { urlFromImage } = require("../utils/urlFromImage");
var router = express.Router();

/* GET minis. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Every Mini Painted" });
});

/* GET mini. */
router.get("/:id", async function (req, res, next) {
  try {
    const mini = await getMini(req.params.id);
    const thumbnailImageURL = urlFromImage(mini.thumbnail);

    const images = mini.images.map((image) => urlFromImage(image));

    res.render("things/thing", {
      title: `EMP - ${mini.name}`,
      description: mini.description,
      thumbnailImageURL,
      images,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
