import React from 'react';
import ReactDOM from 'react-dom';
import ClockClassComponent from './ClockClassComponent';
import MyTodoComponent from './MyTodoComponent';
import CovidMainComponent from './CovidMainComponent';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function Routes()
{
    return (
    <div>
        <Router>
            <Switch>
                <Route path="/ClockClassComponent">
                    <ClockClassComponent />
                </Route>
                <Route path="/MyTodoComponent">
                    <MyTodoComponent />
                </Route>
                <Route path="/CovidMainComponent">
                    <CovidMainComponent />
                </Route>
                <Route path="/">
                    <CovidMainComponent />
                </Route>
            </Switch>
        </Router>
    </div>
    );
}

ReactDOM.render(<Routes /> 
            ,document.getElementById('root'));