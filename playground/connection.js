// const  mongoClient=require("mongodb").MongoClient;
const {MongoClient,ObjectID}=require("mongodb")

MongoClient.connect("mongodb://localhost:27017/Todolist",(err,db)=>{
    if(err){
        return console.log("some error has been occured",err);
    }
    console.log("sucessfully connected with the database");
   
    db.collection("Users").insertOne({
        _id:1234,
        name:"Aky",
        age:20,
        location:"konnagar"
    },(err,res)=>{
        if(err){
            return console.log("unable to insert data",err);
        }
        console.log(JSON.stringify(res.ops,undefined,2));
    });


    db.close();
})