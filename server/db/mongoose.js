var mongoose=require("mongoose");

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://kum:aanand420@ds139322.mlab.com:39322/mou"||"mongodb://localhost:27017/TodoApp");



module.exports={mongoose};