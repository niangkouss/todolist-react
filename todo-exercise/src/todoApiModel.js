export default class todoModel{
    constructor(){
        this.todos = [];
        this.listeners = [];
        this.init();
    }
    init(){
        $.ajax({
            url:'http://localhost:3000/todos',
            type:'GET',
            success(todos){
                this.saveAndNotify(todos);
            }
        })
    }
    subscribe(listener){
        this.listeners.push(listener)
    }
    emit(){
        this.listeners.forEach(listener=>listener())
    }
    saveAndNotify(todos){
        this.emit();
        this.todos = todos;
    }
    addTodo=(todo)=>{
        $.ajax({
            url:'http://localhost:3000/todos',
            type:'POST',
            success(todos){
                this.saveAndNotify(todos);
            }
        })
    }

    toggle=(id)=>{
        $.ajax({
            url:'http://localhost:3000/todos/toggle',
            type:'GET',
            data:{id},
            success(todos){
                this.saveAndNotify(todos);
            }
        })
    }
    toggleAll=(event)=>{
        let checked = event.target.checked;
        $.ajax({
            url:'http://localhost:3000/todos/toggleAll',
            type:'GET',
            data:{checked},
            success(todos){
                this.saveAndNotify(todos);
            }
        })
    }
    remove=(id)=>{
        $.ajax({
            url:'http://localhost:3000/todos',
            type:'DELETE',
            data:{id},
            success(todos){
                this.saveAndNotify(todos);
            }
        })
    }
    clearCompleted=()=>{
        $.ajax({
            url:'http://localhost:3000/todos/clearCompleted',
            type:'GET',
            success(todos){
                this.saveAndNotify(todos);
            }
        })
    }
}