var express=require("express");
var BodyParser=require("body-parser");
var {ObjectID}=require("mongodb")

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

app.get("/todos",(req,res)=>{
    Todo.find({}).then((todos)=>{
        res.send(todos)
    });
},(e)=>{
    res.status(400).send(e);
})

app.get("/todos/:id",(req,res)=>{

    var id=req.params.id
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send(todo)
    },(e)=>{
        res.status(400).send()
    })
})

app.listen(3000,()=>{
    console.log("server 3000 is running")
});


module.exports={app};
