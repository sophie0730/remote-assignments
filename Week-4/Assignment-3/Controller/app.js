import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();

import { findUser, createUser } from "../Model/database.js";
import { comparePassword, hashPassword } from "../Model/password.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url); //for ES module
const __dirname = dirname(__filename);

app.set("views", __dirname + "/../views");
app.set("view engine", "pug");

app.use(express.static(__dirname + "/../views/style")); //for link css
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
    return res.redirect("/signUp");
  }
  if (req.query.signIn == "") {
    return res.redirect("/signIn");
  }
  res.render("home");
});

app.get("/signUp", (req, res) => {
  res.render("signUp");
});

app.get("/signIn", (req, res) => {
  res.render("signIn");
});

app.post("/signUp", async (req, res) => {
  try {
    if (req.body.newEmail == "" || req.body.newPassword == "") {
      return res.render("signUp", {
        warningUp: "Please enter your email and password.",
      });
    }

    const result = await findUser(req.body.newEmail);
    console.log(result);

    if (result !== "" && result !== undefined) {
      return res.render("signUp", {
        warningUp: "This email has been registered",
      });
    }

    const hashNewPassword = await hashPassword(req.body.newPassword);
    const user = await createUser(req.body.newEmail, hashNewPassword);
    req.session.user = user;

    res.redirect("/member");
  } catch (Error) {
    res.status(500).render("error", { err: Error });
  }
});

app.post("/signIn", async (req, res) => {
  try {
    if (req.body.email == "" || req.body.password == "") {
      return res.render("signIn", {
        warningIn: "Please enter your email and password.",
      });
    }

    const hashResult = await findUser(req.body.email);
    const isValidPassword = await comparePassword(
      req.body.password,
      hashResult.password
    );

    if (!isValidPassword) {
      return res.render("signIn", {
        warningIn:
          "Email or password is incorrect. Please confirm or sign up an account.",
      });
    }

    req.session.user = hashResult;
    res.redirect("/member");
  } catch (Error) {
    console.error(Error);
    res.status(500).render("error", { err: Error });
  }
});

app.get("/member", (req, res) => {
  const user = req.session.user;
  res.render("member", { email: user.email });
});

app.use((req, res, next) => {
  res.status(404).render("error", { err: "This page is not found." });
});

const port = 3000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
