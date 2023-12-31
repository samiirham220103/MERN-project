const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
const mongoose = require("mongoose");
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

//mongodb configuration using mongoose

//samiirhamnillah03
//rzHJiOcqxNRmKMHT
/*mongodb+srv://samiirhamnillah03:<password>@demo-foodi-client.jy1xtka.mongodb.net/?retryWrites=true&w=majority*/

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@demo-foodi-client.jy1xtka.mongodb.net/demo-foodi-client?retryWrites=true&w=majority`
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log("Error to connect MongoDB", error));

//import route here
const menuRoutes = require("./api/routes/menuRoutes");
const cartRoutes = require("./api/routes/cartRoutes");
app.use("/menu", menuRoutes);
app.use("/carts", cartRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
