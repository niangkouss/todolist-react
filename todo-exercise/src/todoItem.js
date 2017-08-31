import React from 'react';
export default class item extends React.Component{
    render(){
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-1">
                        <input type="checkbox"/>
                    </div>
                    <div className="col-md-10">

                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-danger btn-xs">&times;</button>
                    </div>
                </div>
            </li>
        )
    }
}