var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// GET method route
router.get("/:id", function (req, res) {
  res.json("GET request to the homepage" + req.params.id);
});

// GET method route
router.get("/", function (req, res) {
  res.json("GET request to the homepage");
});

// POST method route
router.post("/", function (req, res) {
  res.json("POST request to the homepage");
});

// PUT method route
router.put("/:id", function (req, res) {
  res.json("PUT request to the homepage");
});

// DELETE method route
router.delete("/:id", function (req, res) {
  res.json("DELETE request to the homepage");
});

module.exports = router;
