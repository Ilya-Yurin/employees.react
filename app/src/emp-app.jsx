import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as Layouts from './layouts/';

class EmpApp extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='emp-app__wrapper'>
          <Layouts.EmpHeader>
          </Layouts.EmpHeader>
          <div className='emp-app__content'>
            <Layouts.EmpSidebar>
              <div className="emp-app__add">
                <a href="/#add">
                  <i className="fa fa-plus-circle grey-fa-font"></i>
                </a>
              </div>
              <Layouts.EmpList/>
            </Layouts.EmpSidebar>
            <Layouts.EmpContent>
              Content text
            </Layouts.EmpContent>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<EmpApp />, document.getElementById('emp-app'));
