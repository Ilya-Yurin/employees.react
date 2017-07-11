import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {List} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as Layots from './layouts/';

class EmpApp extends Component {
  render() {
    return (
      <div className='emp-app__wrapper'>
        <Layots.EmpHeader>
        </Layots.EmpHeader>
        <div className='emp-app__content'>
          <Layots.EmpSidebar>
            <div className="emp-app__add--shadow">
              <a href="/#add">
                <i className="fa fa-plus-circle grey-fa-font"></i>
              </a>
            </div>
            <MuiThemeProvider>
              <List style={{padding: 0}}>
                <Layots.EmpListItem>
                  User #1
                </Layots.EmpListItem>
                <Layots.EmpListItem>
                  User #2
                </Layots.EmpListItem>
                <Layots.EmpListItem>
                  User #3
                </Layots.EmpListItem>
              </List>
            </MuiThemeProvider>
            <div className="emp-app__sidebar--footer">
            </div>
          </Layots.EmpSidebar>
          <Layots.EmpContent>
            Content text
          </Layots.EmpContent>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<EmpApp />, document.getElementById('emp-app'));
