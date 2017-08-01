import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { EmpListItem } from '../list-item/emp-list-item';
import './emp-list.styl';

export const EmpList = props => {
  return (
    <MuiThemeProvider>
      <div className='emp-list'>
        <EmpListItem>
          User #1
        </EmpListItem>
        <EmpListItem>
          User #2
        </EmpListItem>
        <EmpListItem>
          User #3
        </EmpListItem>
      </div>
    </MuiThemeProvider>
  );
};

