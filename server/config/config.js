var env=process.env.NODE_ENV || "dev";
console.log("env ******",env)
if (env=="dev"){
    process.env.PORT=3000;
    process.env.MONGODB_URI="mongodb://localhost:27017/TodoApp2";
}else if(env=="test1"){
    process.env.PORT=3000;
    process.env.MONGODB_URI="mongodb://localhost:27017/TodoTestApp1";
}
else{
    process.env.MONGODB_URI="mongodb://ad:and123@ds139322.mlab.com:39322/mou"
}