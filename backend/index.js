const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());

app.post('/todo', async function(req,res){
    const createPayLoad = req.body;
    const parsedPayload = createTodo.safeParse(createPayLoad);

    if(!parsedPayload){
        res.status(411).json({
            msg: "You have entered wrong details"
        })
        return;
    }

    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false,
    })

    res.json({
        msg: "todo created"
    })
})

app.get('todos', async function(req,res){
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put('/completed', async function(req,res){
    const createPayLoad = req.body;
    const parsedPayload = updateTodoTodo.safeParse(createPayLoad);

    if (!parsedPayload) {
      res.status(411).json({
        msg: "You have entered wrong details",
      });
      return;
    }

    todo.update({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg: "todo updated"
    })
})

app.listen(3000)