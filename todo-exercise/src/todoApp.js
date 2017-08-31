import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './todoHeader';
import Item from './todoItem';
import Footer from './todoFooter'
import * as filterTypes from './filterTypes'

export default class todoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filterType:filterTypes.ALL
        };
    }

    changeFilterType=(filterType)=>{
        this.setState({filterType})
    }
    render(){
        let todos = this.props.model.todos;
        let activeTodoCount =todos.reduce((count,todo)=>count+(todo.completed?0:1),0);
        let showTodo =todos.filter(todo=>{
            switch (this.state.filterType){
                case filterTypes.ACTIVE: return !todo.completed;
                case filterTypes.COMPLETED: return todo.completed;
                default : return true;
            }
        })
        let completedTodoCount = todos.length - activeTodoCount;
        let main =(
            <ul className="list-group">
                {
                    todos.length>0?(<li className="list-group-item">
                        <input type="checkbox" checked={activeTodoCount===0} onChange={this.props.model.toggleAll}/>{activeTodoCount===0?'全部取消':'全部选中'}
                    </li>):void 0
                }

                {

                    showTodo.map((todo,index)=><Item todo={todo} toggle={this.props.model.toggle} remove={this.props.model.remove}/>)
                }
            </ul>
        )
        return (
               <div className="container" style={{marginTop:20}}>
                   <div className="row">
                       <div className="col-md-6 col-md-offset-3">
                           <div className="panel panel-default">
                               <div className="panel-heading">
                                   <Header addTodo={this.props.model.addTodo}/>
                               </div>
                               <div className="panel-body">
                                   {main}
                               </div>
                               <div className="panel-footer" >
                                   <Footer activeTodoCount={activeTodoCount} changeFilterType={this.changeFilterType} filterType={this.state.filterType} clearCompleted={this.props.model.clearCompleted} completedTodoCount={completedTodoCount}/>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
        )
    }
}