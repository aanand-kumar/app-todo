const {MongoClient,ObjectID}=require("mongodb")

MongoClient.connect("mongodb://localhost:27017/Todolist",(err,db)=>{
    if(err){
        return console.log("some error has been occured",err);
    }
    console.log("connected with mongoDb servers");

    // db.collection("Users").deleteMany({name:"Ad"}).then((res)=>{
    //     console.log(res);
    // })

    db.collection("Users").findOneAndDelete({age:20}).then((res)=>{
        console.log(res)
    })

   
    // db.close();
})