const express = require("express");
const mongoose = require("mongoose");
var session = require('express-session');
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require('./routes/userRoute');
const app = express();

// Connect db

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/smartedu-db", {
  
  })
  .then(() => {
    console.log("DB Connected Successfuly");
  });
  
// Template engine

app.set("view engine", "ejs");

//Global variables
global.userIN = null;

//Middlewares

app.use(express.static("public"));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(session({
  secret:'my_keyboard_cat',
  resave:false,
  saveUninitialized: true,
  
}))

//Routes
app.use('*',(req,res,next)=> {
  userIN = req.session.userID;
  next();
})
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);


const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
