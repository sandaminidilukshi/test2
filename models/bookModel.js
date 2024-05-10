const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  isbn: {
    type: Number,
  },
  author: {
    type: String,
  },
});

const bookModel = mongoose.model("books", BookSchema);

module.exports = bookModel;
