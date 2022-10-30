const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const tasks = [];
const workTasks = [];

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    day = date.getdate();
    res.render("day", {route:"/", title : day, items : tasks});

})

app.get("/work", (req, res) => {
    res.render("day", {route:"/work", title: "work", items: workTasks});
})

app.post("/work", (req, res) => {
    let task = req.body.newTask;
    workTasks.push(task);
    res.redirect("/work");
})

app.post("/", (req,res) => {
    let task = req.body.newTask;
    tasks.push(task);
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("sever is running at port 3000");
})