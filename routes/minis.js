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
