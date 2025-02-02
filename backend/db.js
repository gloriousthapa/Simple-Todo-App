const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:admin@mongodb-week3.kamq5.mongodb.net/todo-app");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}

