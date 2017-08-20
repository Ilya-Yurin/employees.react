import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { EmpRouterSwitch } from '../emp-router-switch/emp-router-switch';
import { EmpAdd } from '../emp-add/emp-add';

import './emp-content.styl';

export const EmpContent = props => {
  return (
    <main className='emp-content'>
      <Switch>
        <Route exact path='/employee/add' render={(routeProps) => (<EmpAdd {...props} {...routeProps}/>)}/>
        <Route path='/employee/:id' render={(routeProps) => (<EmpRouterSwitch {...props} {...routeProps}/>)}/>
      </Switch>
    </main>
  )
};
