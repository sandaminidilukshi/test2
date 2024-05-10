const Books = require("../models/bookModel");
const mongoose = require("mongoose");

const createBook = async (req, res) => {
  const name = req.body.name;
  const isbn = req.body.isbn;
  const author = req.body.author;

  const newBook = await Books.create({ name, isbn, author });
  try {
    res.status(200).json(newBook);
  } catch (error) {
    console.log(error);
  }
};

const editBook = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const isbn = req.body.isbn;
  const author = req.body.author;

  const edit = await Books.findByIdAndUpdate(id, { name, isbn, author });
  try {
    res.status(200).json(edit);
  } catch (error) {
    console.log(error);
  }
};

const viewBooks = async (req, res) => {
  const books = await Books.find();
  try {
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createBook, editBook, viewBooks };
