var mongoose = require("mongoose");
//const { DateTime } = require("luxon");

/*var validateEmail = function (email) {
  var re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  return re.test(email);
};

var formatDate = function () {
  return DateTime.fromJSDate(this.dateOfBirth).toISODate();
};*/

var pokemonSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  talent: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: [
      "NORMAL",
      "FEU",
      "EAU",
      "PLANTE",
      "ELECTRIK",
      "GLACE",
      "COMBAT",
      "POISON",
      "SOL",
      "PSY",
      "INSECTE",
      "ROCHE",
      "SPECTRE",
      "DRAGON",
    ],
  },
});

pokemonSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

pokemonSchema.virtual("id").get(function () {
  return this._id;
});

// Export model.
module.exports = mongoose.model("pokemon", pokemonSchema);
