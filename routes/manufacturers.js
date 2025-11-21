var express = require("express");
const { getManufacturer } = require("../services/manufacturer");
const { urlFromImage } = require("../utils/urlFromImage");
var router = express.Router();

/* GET manufacturers. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Every Mini Painted" });
});

/* GET manufacturer. */
router.get("/:id", async function (req, res, next) {
  try {
    const manufacturer = await getManufacturer(req.params.id);
    const thumbnailImageURL = urlFromImage(manufacturer.thumbnail);

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
