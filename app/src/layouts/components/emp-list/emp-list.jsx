import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {EmpListItem} from '../emp-list-item/emp-list-item';
import './emp-list.styl';
import _ from 'lodash';

export class EmpList extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.onGetEmployeeList();
    this.props.onGetTagList();
  }

  render() {
    const empItems = _.map(_.get(this.props, 'employee_list.list', []), (employee, key) => {
      return <EmpListItem employee={employee} key={key} {...this.props}/>;
    });

    return (
      <MuiThemeProvider>
        <div className='emp-list'>
          {empItems}
        </div>
      </MuiThemeProvider>
    );
  }
}

