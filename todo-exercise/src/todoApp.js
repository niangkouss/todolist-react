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
    render(){
        let main =(
            <ul className="list-group">
                {

                    this.state.todos.map((todo,index)=><Item todo={todo} toggle={this.toggle}/>)
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