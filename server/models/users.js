var mongoose=require("mongoose");

var user=mongoose.model("users",{
    email:{
        type:String,
        require:true,
        trim:true,
        minlength:1
    }
});

module.exports={user}