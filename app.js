const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) =>{

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  console.log(firstName, lastName, email);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

// const apiKey = "6574a7d9ee86f53351ad018ba70bed68-us12";