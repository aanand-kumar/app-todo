var mongoose=require("mongoose");

var Todo=mongoose.model("todo",{
    text:{
        type:String,
        require:true,
        minlength:1,
        trim:1
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

module.exports={Todo};