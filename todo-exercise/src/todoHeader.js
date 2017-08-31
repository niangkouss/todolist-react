import React from 'react';
const ENTRY_KEY = 13;
export default class todoHeader extends React.Component{
    handleKeyDown=(event)=>{
        if(event.keyCode===ENTRY_KEY){
            let title = event.target.value;
            this.props.addTodo({title})
            event.target.value= ''
        }
    }
    render(){
        return (

                <div className="form-group">
                    <input type="text" autoFocus={true} className="form-control" onKeyDown={this.handleKeyDown}/>
                </div>

        )
    }
}