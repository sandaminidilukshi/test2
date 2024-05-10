const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/bookRoute");
const app = express();
cors();

app.use(express.json());
app.listen(5000, () => {
  console.log("Server Started on port 5000");

  mongoose
    .connect("mongodb+srv://*******@cluster0.qdroxu7.mongodb.net/Books")
    .then(console.log("DB connected"))
    .catch((e) => console.log(e));
});

app.use("/api", router);
