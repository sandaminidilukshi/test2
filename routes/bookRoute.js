const {
  createBook,
  editBook,
  viewBooks,
  deleteBook,
} = require("../controllers/bookController");
const express = require("express");
const router = express.Router();

router.post("/create-book", createBook);
router.put("/edit-book/:id", editBook);
router.get("/view-books", viewBooks);
router.delete("/delete-book/:id", deleteBook);

module.exports = router;
