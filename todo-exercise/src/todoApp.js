import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './todoHeader';
import Item from './todoItem';
import Footer from './todoFooter'

export default class todoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todos:[
                {id:Date.now()+Math.random(),title:'1',completed:false},
                {id:Date.now()+Math.random(),title:'2',completed:false}
            ]
        };
    }
    addTodo=(todo)=>{
        let todos = this.state.todos;
        todo = {id:Date.now()+Math.random(),completed:false,...todo}
        todos.push(todo);
        this.setState({todos});
    }
    toggle=(id)=>{
        let todos = this.state.todos;
        todos= todos.map(todo=>{
            if(todo.id == id){
                todo.completed = !todo.completed;
            }
            return todo;
        })
        this.setState({todos})
    }
    toggleAll=(event)=>{
        let checked = event.target.checked;
        let todos =this.state.todos;
        todos = todos.map(todo=>{
            todo.completed = checked;
            return todo;
        })
        this.setState({todos})
    }
    remove=(id)=>{
        let todos = this.state.todos;
        let index =todos.findIndex(todo=>todo.id == id);
        todos.splice(index,1);
        this.setState({todos});
    }
    render(){
        let todos = this.state.todos;
        let activeTodoCount =todos.reduce((count,todo)=>count+(todo.completed?0:1),0);
        let main =(
            <ul className="list-group">
                {
                    todos.length>0?(<li className="list-group-item">
                        <input type="checkbox" checked={activeTodoCount===0} onChange={this.toggleAll}/>{activeTodoCount===0?'全部取消':'全部选中'}
                    </li>):void 0
                }

                {

                    this.state.todos.map((todo,index)=><Item todo={todo} toggle={this.toggle} remove={this.remove}/>)
                }
            </ul>
        )
        return (
               <div className="container" style={{marginTop:20}}>
                   <div className="row">
                       <div className="col-md-6 col-md-offset-3">
                           <div className="panel panel-default">
                               <div className="panel-heading">
                                   <Header addTodo={this.addTodo}/>
                               </div>
                               <div className="panel-body">
                                   {main}
                               </div>
                               <div className="panel-footer">
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
        )
    }
}