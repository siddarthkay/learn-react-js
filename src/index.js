import React from 'react';
import ReactDOM from 'react-dom';
import ClockClassComponent from './ClockClassComponent';
import MyTodoComponent from './MyTodoComponent';
import CovidMainComponent from './CovidMainComponent';

import MyTodoHooksComponent from './MyTodoHooksComponent';

import { BrowserRouter, Switch, Route,Link } from "react-router-dom";

function AppRoutes()
{
    return (
        <BrowserRouter>

        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Crud">Crud Covid Example</Link>
            </li>
            <li>
              <Link to="/Clock">Clock example that updates every second</Link>
            </li>
          </ul>
        </nav> */}
            <Switch>
                <Route path="/Clock">
                    <ClockClassComponent />
                </Route>
                <Route path="/Crud">
                    <CovidMainComponent />
                </Route>
                <Route path="/">
                    <MyTodoHooksComponent />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

ReactDOM.render(<AppRoutes /> 
            ,document.getElementById('root'));