class Todo {
    constructor() {
        this.todos = [];
        this.currentId = 1;
    }

    add(text) {
        this.todos.push({ id: this.currentId, text });
        this.currentId++;
    }

    remove(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    getAll() {
        return this.todos;
    }
}

module.exports = Todo;
