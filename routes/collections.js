var express = require("express");
const { getCollection } = require("../services/collection");
const { urlFromImage } = require("../utils/urlFromImage");
var router = express.Router();

/* GET collections. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Every Mini Painted" });
});

/* GET collection. */
router.get("/:id", async function (req, res, next) {
  try {
    const collection = await getCollection(req.params.id);
    const thumbnailImageURL = urlFromImage(collection.thumbnail);

    const images = collection.images.map((image) => urlFromImage(image));

    res.render("things/thing", {
      title: `EMP - ${collection.name}`,
      description: collection.description,
      thumbnailImageURL,
      images,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
