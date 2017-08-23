import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {EmpAdd} from '../emp-add/emp-add';
import {EmpInfo} from '../emp-info/emp-info';
import {EmpNotFound} from '../emp-not-found/emp-not-found';
import './emp-router-switch.styl';

import _ from 'lodash';

export const EmpRouterSwitch = props => {
  const employee = _.find(_.get(props, 'employee_list.list', []), ['id', _.parseInt(_.get(props, 'match.params.id'))]);

  return (
    <Switch>
      <Route exact path='/employee/not-found' render={routeProps => (<EmpNotFound {...props} {...routeProps}/>)}/>
      <Route exact path='/employee/:id' render={routeProps => (<EmpInfo employee={employee} {...props} {...routeProps}/>)}/>
      <Route path='/employee/:id/edit' render={routeProps => (<EmpAdd employee={employee} {...props} {...routeProps}/>)}/>
    </Switch>
  )
};
