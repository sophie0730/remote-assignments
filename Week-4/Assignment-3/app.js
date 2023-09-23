import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();

import { findUser, createUser, findExistUser } from "./database.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url); //for ES module
const __dirname = dirname(__filename);

app.set("view engine", "pug");

app.use(express.static(__dirname + "/style")); //for link css
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    name: "",
    saveUninitialized: false,
    resave: true,
  })
);

app.get("/home", (req, res) => {
  if (req.query.signUp == "") {
    return res.redirect("/home/signUp");
  }
  if (req.query.signIn == "") {
    return res.redirect("/home/signIn");
  }
  res.render("home");
});

app.get("/home/signUp", (req, res) => {
  res.render("signUp");
});

app.get("/home/signIn", (req, res) => {
  res.render("signIn");
});

app.post("/home/signUp", async (req, res) => {
  if (req.body.newEmail == "" || req.body.newPassword == "") {
    return res.render("signUp", {
      warningUp: "Please enter your email and password.",
    });
  }

  const result = await findUser(req.body.newEmail, req.body.newPassword);
  if (result != "") {
    return res.render("signUp", {
      warningUp: "This email has been registered",
    });
  }

  const user = await createUser(req.body.newEmail, req.body.newPassword);
  req.session.user = user;
  res.redirect("/member");
});

app.post("/home/signIn", async (req, res) => {
  if (req.body.email == "" || req.body.password == "") {
    return res.render("signIn", {
      warningIn: "Please enter your email and password.",
    });
  }
  const result = await findExistUser(req.body.email, req.body.password);
  if (result == "") {
    return res.render("signIn", {
      warningIn:
        "Email or password is incorrect. Please confirm or sign up an account.",
    });
  }

  req.session.user = result;
  res.redirect("/member");
});

app.get("/member", (req, res) => {
  const user = req.session.user;
  res.render("member", { email: user[0].email });
});

const port = 3000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
