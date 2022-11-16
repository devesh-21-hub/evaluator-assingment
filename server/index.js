const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
const { createServer } = require("http");
mongoose.connect(
  "mongodb+srv://devesh_21:devesh21@web-projects.lzki8.mongodb.net/evaluatorDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = createServer(app);
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("/", function (req, res) {
  try {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  } catch (error) {
    console.log(error.message);
  }
});

const values = require("./src/routes/values");
app.use(values);

server.listen(process.env.PORT || 9000, () => {
  console.log("Server is up!");
});
// 9000|| process.env.PORT will cause the server to crash
