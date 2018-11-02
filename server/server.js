var express=require("express");
var BodyParser=require("body-parser");
var {ObjectID}=require("mongodb")
const _=require("lodash")

var {mongoose}=require("./db/mongoose");
var {Todo}=require("./models/todo");

var {user}=require("./models/users");

var app=express();
const port=process.env.PORT ||3000;

app.use(BodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
      text: req.body.text
    });
  
    todo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });

app.get("/todos",(req,res)=>{
    Todo.find({}).then((todos)=>{
        res.send({todos})
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
        res.send({todo})
    },(e)=>{
        res.status(400).send()
    })
});
app.delete("/todos/:id",(req,res)=>{
    var id=req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(400).send(id)
    }
    Todo.findByIdAndDelete(id).then((doc)=>{
        if(!doc){
            return res.status(404).send();
        }
        res.send({doc})
    },(e)=>res.status(400).send())
})

app.patch("/todos/:id",(req,res)=>{
    var id=req.params.id;
    var body=_.pick(req.body,["text","completed"])

    if(!ObjectID.isValid(id)){
        return res.status(400).send(id)
    }
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt=new Date().getTime()
        
    }else{
        body.completed=false
        body.completedAt=null
    }
    Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
        if(!todo){
            return res.status(400).send()
        }
        res.send({todo})
    }).catch((e)=>res.status(404).send())
})

app.listen(port,()=>{
    console.log(`server ${port} is running`)
});


module.exports={app};
