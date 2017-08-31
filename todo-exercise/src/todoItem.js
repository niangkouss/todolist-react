import React from 'react';
export default class panelItem extends React.Component{

    render(){
        let todo = this.props.todo;
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-1">
                        <input type="checkbox" checked={todo.completed} onChange={()=>this.props.toggle(todo.id)}/>
                    </div>
                    <div className="col-md-10" style={{textDecoration:todo.completed?'line-through':''}}>
                        {todo.title}
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-danger btn-xs">&times;</button>
                    </div>
                </div>
            </li>
        )
    }
}