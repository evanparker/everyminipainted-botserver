var express = require("express");
var router = express.Router();
var usersRouter = require("./users");
var minisRouter = require("./minis");
var figuresRouter = require("./figures");
var manufacturersRouter = require("./manufacturers");
var collectionsRouter = require("./collections");

router.use("/users", usersRouter);
router.use("/minis", minisRouter);
router.use("/figures", figuresRouter);
router.use("/manufacturers", manufacturersRouter);
router.use("/collections", collectionsRouter);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Every Mini Painted",
    description:
      "A place to both share your minis and search for painted references to work from.",
    thumbnailImageURL: "/emplogo.png",
  });
});

/* GET other pages. */
router.get("*", function (req, res, next) {
  res.render("index", {
    title: "Every Mini Painted",
    description:
      "A place to both share your minis and search for painted references to work from.",
    thumbnailImageURL: "/emplogo.png",
  });
});

module.exports = router;
