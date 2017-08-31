import React from 'react';
import ReactDOM from 'react-dom';
import App from './todoApp';
import Model from './todoModel'
let model = new Model();
function render() {
    ReactDOM.render(<App model={model}/>,document.querySelector('#root'));
}
model.subscribe(render);
render();


