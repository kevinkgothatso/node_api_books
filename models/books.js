const mongoose = require("mongoose");

const books = new mongoose.Schema( {
    title: String,
    aurther: String,
    date: Date,
    rates: String
});

module.exports = mongoose.model("books", books);
