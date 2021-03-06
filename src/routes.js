import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wizard from './Components/Wizard';
import Dashboard from './Components/Dashboard';


export default(
    <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="/wizard" component={Wizard}></Route>
    </Switch>
)
