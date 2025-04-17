var express = require("express");
const { getFigure } = require("../services/figure");
const { urlFromImage } = require("../utils/urlFromImage");
var router = express.Router();

/* GET figures. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Every Mini Painted" });
});

/* GET figure. */
router.get("/:id", async function (req, res, next) {
  try {
    const figure = await getFigure(req.params.id);
    const thumbnailImageURL = urlFromImage(figure.thumbnail);

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
