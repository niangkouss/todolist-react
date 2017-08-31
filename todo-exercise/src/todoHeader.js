import React from 'react';
export default class todoHeader extends React.Component{
    render(){
        return (
            <form>
                <div className="form-group">
                    <input type="text" autoFocus={true} className="form-control"/>
                </div>
            </form>
        )
    }
}