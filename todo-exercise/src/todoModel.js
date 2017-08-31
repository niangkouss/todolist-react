export default class todoModel{
    constructor(){
        this.STORE_KEY = 'todos';
        this.todos = localStorage.getItem(this.STORE_KEY)?JSON.parse(localStorage.getItem(this.STORE_KEY)):[];
        this.listeners = [];
    }
    subscribe(listener){
        this.listeners.push(listener)
    }
    emit(){
        this.listeners.forEach(listener=>listener())
    }
    saveAndNotify(todos){
        localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));
        this.emit();
        this.todos = todos;
    }
    addTodo=(todo)=>{
        let todos = this.todos;
        todo = {id:Date.now()+Math.random(),completed:false,...todo}
        todos.push(todo);
        this.saveAndNotify(todos);
    }

    toggle=(id)=>{
        let todos = this.todos;
        todos= todos.map(todo=>{
            if(todo.id == id){
                todo.completed = !todo.completed;
            }
            return todo;
        })
        this.saveAndNotify(todos);
    }
    toggleAll=(event)=>{
        let checked = event.target.checked;
        let todos =this.todos;
        todos = todos.map(todo=>{
            todo.completed = checked;
            return todo;
        })
        this.saveAndNotify(todos);
    }
    remove=(id)=>{
        let todos = this.todos;
        let index =todos.findIndex(todo=>todo.id == id);
        todos.splice(index,1);
        this.saveAndNotify(todos);
    }
    clearCompleted=()=>{
        let todos = this.todos;
        todos =todos.filter(todo=>!todo.completed)
        this.saveAndNotify(todos);
    }
}