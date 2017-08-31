import React from 'react'
import * as filterTypes from './filterTypes'
export default class todoFooter extends React.Component{
    render(){
        return (
            <div className="row text-center" >
                <div className="col-xs-4">
                    {
                        this.props.activeTodoCount?(  <a href="#" style={{textDecoration:'none'}}>
                            你有
                            <span className="badge">{this.props.activeTodoCount}</span>
                            代办事项数量
                        </a>):null
                    }
                </div>
                <div className="col-xs-4">
                    <button className={`btn btn-xs ${this.props.filterType===filterTypes.ALL?" btn-success":" btn-default"}`} onClick={()=>this.props.changeFilterType(filterTypes.ALL)}>全部</button>
                    <button className={`btn btn-xs ${this.props.filterType===filterTypes.ACTIVE?" btn-success":" btn-default"}`} style={{marginLeft:10,marginRight:10}} onClick={()=>this.props.changeFilterType(filterTypes.ACTIVE)}>未完成</button>
                    <button className={`btn btn-xs ${this.props.filterType===filterTypes.COMPLETED?" btn-success":" btn-default"}`} onClick={()=>this.props.changeFilterType(filterTypes.COMPLETED)}>已完成</button>
                </div>
                <div className="col-xs-4">
                    {
                        this.props.completedTodoCount? (<button className="btn btn-danger btn-xs" onClick={this.props.clearCompleted}>删除已完成</button>):null
                    }
                </div>
            </div>
        )
    }
}