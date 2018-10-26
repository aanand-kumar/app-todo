const expect=require("expect")

const request=require("supertest");

var {Todo}=require("./../models/todo");
var {app}=require("./../server");

var todos=[{
    text:"test code 1"
},{
    text:"test cose 2"
}]
beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos)
    }).then(()=>done())
})

describe("POST/todos",()=>{
    it("should test add todo",(done)=>{

        var text="it is a test";

        request(app)
        .post("/todos")
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err){
                return done(arr);
            }
            Todo.find({text}).then((todos)=>{
                expect(todos.length).toBe(1);
                done();
            }).catch((e)=>{done(e)})
        })
    })
});

describe("GET/todos",()=>{
    it("should get the todos",(done)=>{
        request(app)
        .get("/todos")
        .expect(200)
        .end(done)
    })
})