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
    render(){
        let main =(
            <ul className="list-group">
                {

                    this.state.todos.map((todo,index)=><Item todo={todo}/>)
                }
            </ul>
        )
        return (
               <div className="container" style={{marginTop:20}}>
                   <div className="row">
                       <div className="col-md-6 col-md-offset-3">
                           <div className="panel panel-default">
                               <div className="panel-heading">
                                   <Header/>
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