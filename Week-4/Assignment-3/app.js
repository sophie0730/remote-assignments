import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
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
    secret: "secretValue",
    name: "",
    saveUninitialized: false,
    resave: true,
  })
);

const port = 3000;

app.get("/home", async (req, res) => {
  // const users = await getNotes();
  // console.log(users);
  res.render("home");
});

app.post("/home", async (req, res) => {
  //sign-up status
  if (req.body.signUp == "") {
    if (req.body.newEmail == "" && req.body.newPassword == "") {
      return res.render("home", {
        warningUp: "Please enter your email and password.",
      });
    }
    const result = await findUser(req.body.newEmail, req.body.newPassword);
    if (result != "") {
      return res.render("home", {
        warningUp: "This email has been registered",
      });
    }

    const user = await createUser(req.body.newEmail, req.body.newPassword);
    req.session.user = user;
    res.redirect("member");
  }

  //sign-in status
  if (req.body.signIn == "") {
    if (req.body.email == "" && req.body.password == "") {
      return res.render("home", {
        warningIn: "Please enter your email and password.",
      });
    }
    const result = await findExistUser(req.body.email, req.body.password);
    if (result == "") {
      return res.render("home", {
        warningIn:
          "Email or password is incorrect. Please confirm or sign up an account.",
      });
    }

    req.session.user = result;
    res.redirect("member");
  }
});

app.get("/member", (req, res) => {
  const user = req.session.user;
  res.render("member", { email: user[0].email });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
