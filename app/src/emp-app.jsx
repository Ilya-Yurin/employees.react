import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as Layouts from './layouts/';

injectTapEventPlugin();

class EmpApp extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const openAddEmployee = () => {
      this.props.onCloseEmployee();
      this.props.history.push('/employee/add');
    };
    return (
      <MuiThemeProvider>
        <div className='emp-app__wrapper'>
          <Layouts.EmpHeader>
          </Layouts.EmpHeader>
          <div className='emp-app__content'>
            <Layouts.EmpSidebar>
              <div className="emp-app__add">
                <i className="fa fa-plus-circle emp-app__fa-button" onClick={openAddEmployee}/>
              </div>
              <Layouts.EmpList {...this.props}/>
            </Layouts.EmpSidebar>
            <Layouts.EmpContent {...this.props}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default (props) => {
  return (
    <BrowserRouter>
      <Route path='/' render={(routeProps) => <EmpApp {...props} {...routeProps}/>}/>
    </BrowserRouter>
  );
}
