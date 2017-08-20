import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {EmpAdd} from '../emp-add/emp-add';
import {EmpInfo} from '../emp-info/emp-info';
import './emp-router-switch.styl';

export const EmpRouterSwitch = props => {
  return (
    <Switch>
      <Route exact path='/employee/:id' render={(routeProps) => (<EmpInfo {...props} {...routeProps}/>)}/>
      <Route path='/employee/:id/edit' render={(routeProps) => (<EmpAdd {...props} {...routeProps}/>)}/>
    </Switch>
  )
};
