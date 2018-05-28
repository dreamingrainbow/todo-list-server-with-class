const express = require('express');
const bodyParser = require('body-parser');
const Cors = require('cors');
const server = express();
const TodoList = require('./TodoList');
const todoList = new TodoList();
server.use(bodyParser.json());

server.use(Cors());

server.get('/', (request, response) => {
    response.send('<h1>TODO List API</h1>');
});

server.get('/todo-list', (request, response) => {
    response.json(todoList.getToDoList());
});

server.post('/todo', (request, response) => {
    const { todo } = request.body;
    todoList.add(todo);
    response.json(todoList.getToDoList());
});

server.put('/todo/:todoIndex', (request, response) => {
    const { todoIndex } = request.params;
    todoList.complete(todoIndex);
    response.json(todoList.getToDoList());
});


server.delete('/todo/:todoIndex', (request, response) => {
    const { todoIndex } = request.params;
    todoList.delete(todoIndex);
    response.json(todoList.getToDoList());
});

const app = server.listen(3000, () => {
    console.log(`Server was started.`)
});
