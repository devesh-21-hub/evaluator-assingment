const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
const { createServer } = require("http");
const http = require("http");
mongoose.connect(
  "mongodb+srv://devesh_21:devesh21@web-projects.lzki8.mongodb.net/evaluatorDB",
  { useNewUrlParser: true }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is up and running!" });
});

const server = createServer(app);

const values = require("./src/routes/values");
app.use(values);

server.listen(process.env.PORT || 8000);
