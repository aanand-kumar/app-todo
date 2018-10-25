const expect=require("expect")

const request=require("supertest");

var {Todo}=require("./../models/todo");
var {app}=require("./../server");
beforeEach((done)=>{
    Todo.remove({}).then(()=>done());
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
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(1);
                done();
            }).catch((e)=>{done(e)})
        })
    })
});
