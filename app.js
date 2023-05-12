const app = new Vue({
    el: "#app",
    data: {
        title: "Todo List",
        newTodo: "",
        todoList: []
    },
    methods: {
        addTodo() {
            console.log(this.newTodo);
            this.todoList.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = "";
        },
        removeTodo(todo) {
            const todoIndex = this.todoList.indexOf(todo);
            this.todoList.splice(todoIndex, 1);
        },
        allDone() {
            this.todoList.forEach(todo => {
                todo.done = true;
                
            });
        },
        deleteAll() {
            this.todoList = [];
            document.getElementById("delete-all-success").display = "block";
        }
    }
});