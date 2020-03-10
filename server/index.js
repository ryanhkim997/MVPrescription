const express = require("express");
const bParser = require("body-parser");
const cors = require("cors");
const port = 3000;
const router = require("./router");
const db = require('./index.js')

const app = express();
app.use(bParser.json());
app.use(bParser.urlencoded({ extended: true }));

app.use(cors());
app.listen(port, () => {console.log("server online:" + port);});

app.get("/server/test", (req, res) => {
  console.log("visited");
  res.status(200).send(":" + port + " is watching you");
});



app.use("/mvp", router);
