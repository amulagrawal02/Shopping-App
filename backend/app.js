const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const seedDB = require("./seed");

mongoose
  .connect("mongodb://localhost:27017/shopping-app")
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log("DB not connected", err);
  });

// seedDB(); /* run this file only one time  */
app.use(express.json());
app.use(cookieParser());

// for all routes
const productRoutes = require("./routes/productRouter");
const userauthRoutes = require("./routes/userauthRouter");

app.get("/hello", (req, res) => {
  res.status(200).send("hello from server");
});
app.use(productRoutes);
app.use(userauthRoutes);

app.listen(3003, () => {
  console.log("server start at server 3003");
});
