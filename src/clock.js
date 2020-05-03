import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

function clock()
{
  let element = (
    <div>
      <h1>Hola! </h1>
      <h3>Time now is {new Date().toLocaleTimeString()}</h3>
    </div>
    );

    
    ReactDOM.render(element,document.getElementById('root'));
}

setInterval(clock,1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
