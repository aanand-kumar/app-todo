const {MongoClient,ObjectID}=require("mongodb")

MongoClient.connect("mongodb://localhost:27017/Todolist",(err,db)=>{
    if(err){
        return console.log("some error has been occured",err);
    }
    console.log("connected with mongoDb servers");
    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5bc1fc5a0b1e992f48fe764a")
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnNewDocument: false
    // }).then((res)=>{
    //     console.log(res);
    // })
    db.collection("Users").findOneAndUpdate({
        name:"Ad"
    },{
        $set:{
            name:"Aanand"
        },
        $inc:{
            age:10
        }
    },{
        returnOriginal:false
    }).then((res)=>{
        console.log(res);
    })
   
    // db.close();
})