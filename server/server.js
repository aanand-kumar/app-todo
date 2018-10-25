var express=require("express");
var BodyParser=require("body-parser");

var {mongoose}=require("./db/mongoose");
var {Todo}=require("./models/todo");

var {user}=require("./models/users");

var app=express();

app.use(BodyParser.json());

app.post("/todos",(req,res)=>{
    var todo=new Todo({
        text:req.body.text,
        completed:req.body.completed
    });

    todo.save().then((doc)=>{
        res.send(doc)
    },(e)=>{
        res.status(400).send(e)
    }) 
})


app.listen(3000,()=>{
    console.log("server 3000 is running")
});

