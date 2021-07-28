const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("views", __dirname + "/views");

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.get("/photos", (request, response, next) => {
  response.sendFile(__dirname + "/views/photos.html");
});

app.listen(5000, () => {
  console.log("running");
});
