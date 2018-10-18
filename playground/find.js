// const  mongoClient=require("mongodb").MongoClient;
const {MongoClient,ObjectID}=require("mongodb")

MongoClient.connect("mongodb://localhost:27017/Todolist",(err,db)=>{
    if(err){
        return console.log("some error has been occured",err);
    }
    console.log("connected with mongoDb servers");

    db.collection("Users").find({name:"Ad"}).toArray().then((c)=>{
        console.log(JSON.stringify(c,undefined,2))
    },(e)=>{
        console.log(e);
    });
    // db.close();
})