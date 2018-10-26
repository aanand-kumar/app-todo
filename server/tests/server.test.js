const expect=require("expect")

const request=require("supertest");
const {ObjectID}=require("mongodb");

var {Todo}=require("./../models/todo");
var {app}=require("./../server");

var todos=[{
    _id:new ObjectID(),
    text:"test code 1"
},{
    _id:new ObjectID(),
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
        .expect((res)=>{
            expect(res.body.todos.text).toBe(text)
        })
        .end(done)
    })
})

describe("GET/todos/:id",()=>{
    it("should have valid id",(done)=>{
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res)=>{
            expect(res.body.todo.text).toBe(todos[0].text)
        })
        .end(done);
    })
    it("should have invalid id",(done)=>{
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}1`)
        .expect(404)
        .end(done);
    })
    it("should have invalid id",(done)=>{
        request(app)
        .get(`/todos/123`)
        .expect(404)
        .end(done);
    })
})