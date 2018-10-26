var {mongoose}=require("./../server/db/mongoose");
const {ObjectID}=require("mongodb")

var {Todo}=require("./../server/models/todo");

var {user}=require("./../server/models/users")

var id="5bd1ca98b4eebc32acc7e9cf";

if(!ObjectID.isValid(id)){
    console.log("ID is not valid")
}
Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log("not a valid id")
    }
    console.log(todo)

}).catch((e)=>console.log(e))

var id="5bd314f8a7be1887450261b3"

user.findById(id).then((user)=>{
    if(!user){
        return console.log("id does not exist");
    }
    console.log(user)
},(e)=>{
    console.log(e)
})