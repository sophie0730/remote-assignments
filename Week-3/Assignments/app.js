const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); //parses Cookie header and populates req.cookies with an object keyed by the cookie names

const app = express();
app.use(express.static(__dirname + "/")); //將根目錄的靜態資料加入express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const port = 3000;

app.set("view engine", "pug");

//Assignment-1
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Assignment-2
app.get("/data", (req, res) => {
  const userInput = req.query.number;
  const parseInput = Number(userInput);

  if (!userInput) {
    res.send("Lack Parameter");
  } else {
    if (!isNaN(parseInput) && Number.isInteger(parseInput) && parseInput > 0) {
      let total = 0;
      for (let i = parseInput; i >= 1; i--) {
        total += i;
      }
      res.send(`Your number is: ${total}`);
    } else {
      res.send("Wrong Parameter");
    }
  }
});

//Assignment-4

app.get("/myName", (req, res) => {
  if (req.cookies.name) {
    if (req.query.enter === "") {
      res.clearCookie("name");
      res.redirect("/trackName");
    } else {
      res.render("myName", { name: req.cookies.name });
    }
  } else {
    res.redirect("/trackName");
  }
});

app.get("/trackName", (req, res) => {
  if (req.query.name) {
    res.cookie("name", req.query.name);
    res.redirect("/myName");
  } else {
    res.render("trackName");
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
