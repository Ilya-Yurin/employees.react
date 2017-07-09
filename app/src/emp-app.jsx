import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Layots from './layouts/';

class EmpApp extends Component{
  render() {
    return (
      <div className='emp-app__wrapper'>
        <Layots.EmpHeader>
        </Layots.EmpHeader>
        <div className='emp-app__content'>
          <Layots.EmpSidebar>
            Sidebar
          </Layots.EmpSidebar>
          <Layots.EmpContent>
            Content
          </Layots.EmpContent>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<EmpApp />, document.getElementById('emp-app'));
