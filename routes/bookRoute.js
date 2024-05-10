const {
  createBook,
  editBook,
  viewBooks,
} = require("../controllers/bookController");
const express = require("express");
const router = express.Router();

router.post("/create-book", createBook);
router.put("/edit-book/:id", editBook);
router.get("/view-books", viewBooks);

module.exports = router;
