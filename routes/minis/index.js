var express = require("express");
const { getMini } = require("../../services/mini");
var router = express.Router();

/* GET minis. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Every Mini Painted" });
});

/* GET mini. */
router.get("/:id", async function (req, res, next) {
  try {
    const mini = await getMini(req.params.id);

    res.render("minis/mini", {
      title: `EMP - ${mini.name}`,
      description: mini.description,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
