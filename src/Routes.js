import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './Components/MainPage';
import ProjectSenshi from './Components/Projects/ProjectSenshi';
import ProjectYauco from './Components/Projects/ProjectYauco';
import ProjectStacky from './Components/Projects/ProjectStacky';


export default(

    <Switch>
        <Route component={MainPage} exact path='/Home' />
        <Route component={ProjectSenshi} path='/Senshi' />
        <Route component={ProjectYauco} path='/Yauco' />
        <Route component={ProjectStacky} path='/Stacky' />
    </Switch>

)