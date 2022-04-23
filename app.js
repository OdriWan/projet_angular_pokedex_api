var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// Routes
var pokemonRouter = require("./routes/pokemon");

var app = express();
var mongoose = require("mongoose");
var connectionStringLocal =
  "mongodb+srv://audrey:audrey@pokedex.6qazy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
process.env.connectionStringDistant;
var mongodb = process.env.MONGO_URI || connectionStringLocal;
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/pokemon", pokemonRouter);

module.exports = app;
