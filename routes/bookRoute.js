const { createBook, editBook } = require("../controllers/bookController");
const express = require("express");
const router = express.Router();

router.post("/create-book", createBook);
router.put("/edit-book/:id", editBook);

module.exports = router;
