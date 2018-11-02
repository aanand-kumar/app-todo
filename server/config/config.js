var env=process.env.NODE_ENV || "dev";

if (env="dev"){
    process.env.PORT=3000;
    process.env.MONGODB_URI="mongodb://localhost:27017/TodoApp";
}else if(env="test1"){
    process.env.PORT=3000;
    process.env.MONGODB_URI="mongodb://localhost:27017/TodoTestApp";
}
else{
    process.env.MONGODB_URI="mongodb://kum:adaanand420@ds139322.mlab.com:39322/mou"
}