const express = require("express");
const app = express();

app.get("/", (request, response, next) => {
  response.send("hello");
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
