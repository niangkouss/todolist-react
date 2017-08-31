import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import header from './todoHeader';
import Item from './todoItem';
import footer from './todoFooter'

export default class todoApp extends React.Component{
    render(){
        let main =(
            <ul className="list-group">
                <Item/>
            </ul>
        )
        return (
               <div className="container" style={{marginTop:20}}>
                   <div className="row">
                       <div className="col-md-6 col-md-offset-3">
                           <div className="panel panel-default">
                               <div className="panel-heading">
                                   <header/>
                               </div>
                               <div className="panel-body">
                                   {main}
                               </div>
                               <div className="panel-footer">
                                   <footer/>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
        )
    }
}