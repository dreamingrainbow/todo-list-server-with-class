export default class TodoList {
    constructor() {
        this.todoList = [];
        return this;
    }

    getTodoList() {
        return this.todoList;
    }

    add(todo) {
        this.todoList.push(todo);
        return this;
    }

    complete(todoIndex){
        this.todoList[todoIndex].completed = Date.now();    
        return this;
    }

    delete(todoIndex) {
        this.todoList = this.todoList.filter((todo, i) => Number(todoIndex) !== i);
        return this;
    }
}