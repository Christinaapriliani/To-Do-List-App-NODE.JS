const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Todo = require('./todo');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));

const todoList = new Todo();

app.get('/', (req, res) => {
    const todos = todoList.getAll();
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/add', (req, res) => {
    const todoText = req.body.todoText;
    todoList.add(todoText);
    res.redirect('/');
});

app.post('/remove', (req, res) => {
    const todoId = parseInt(req.body.todoId);
    todoList.remove(todoId);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
