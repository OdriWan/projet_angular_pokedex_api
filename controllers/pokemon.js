var Pokemon = require("../models/pokemon");

const { param, body, validationResult } = require("express-validator");

// Create
exports.create = [
  // Check validation
  body("id")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Id must be specified.")
    .isNumeric()
    .withMessage("Id must be a number."),

  body("name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Name must be specified.")
    .isAlphanumeric()
    .withMessage("Name has non-alphanumeric characters."),

  body("description")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Description must be specified."),

  body("talent")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Talent must be specified.")
    .isAlphanumeric()
    .withMessage("Talent has non-alphanumeric characters."),

  body("type")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Type must be specified."),

  // Process Request
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create pokemon object with escaped and trimmed data
    var pokemon = new Pokemon({
      _id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      talent: req.body.talent,
      type: req.body.type,
    });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      pokemon.save(function (err) {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(201).json("Pokemon created successfully !");
      });
    }
  },
];

// Read
exports.getAll = function (req, res, next) {
  Pokemon.find().exec(function (err, result) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(result);
  });
};

exports.getById = [
  param("id")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Id must be specified.")
    .isNumeric()
    .withMessage("Id must be a number."),

  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      Pokemon.findById(req.params.id).exec(function (err, result) {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).json(result);
      });
    }
  },
];

// Delete
exports.delete = [
  param("id")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Id must be specified.")
    .isNumeric()
    .withMessage("Id must be a number."),

  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      Pokemon.findByIdAndRemove(req.params.id).exec(function (err, result) {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).json("Pokemon deleted successfully !");
      });
    }
  },
];

// Update
exports.update = [
  param("id")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Id must be specified.")
    .isNumeric()
    .withMessage("Id must be a number."),

  body("name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Name must be specified.")
    .isAlphanumeric()
    .withMessage("Name has non-alphanumeric characters."),

  body("description")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Description must be specified."),

  body("talent")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Talent must be specified.")
    .isAlphanumeric()
    .withMessage("Talent has non-alphanumeric characters."),

  body("type")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Type must be specified."),

  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create pokemon object with escaped and trimmed data
    var pokemon = new Pokemon({
      _id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      talent: req.body.talent,
      type: req.body.type,
    });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      Pokemon.findByIdAndUpdate(req.params.id, pokemon, function (err, result) {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(201).json("Pokemon updated successfully !");
      });
    }
  },
];
