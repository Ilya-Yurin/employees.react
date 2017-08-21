import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {EmpListItem} from '../emp-list-item/emp-list-item';
import './emp-list.styl';
import _ from 'lodash';

export class EmpList extends Component {

  constructor(props) {
    super(props);
    this.onWhell = this.onWhell.bind(this)
  }

  componentWillMount() {
    this.props.onGetEmployeeList();
    this.props.onGetTagList();
  }

  onWhell(event) {
    if (event.deltaY > 0){
      this.refs.items.scrollTop += 50;
    } else {
      this.refs.items.scrollTop -= 50;
    }
  }

  render() {
    const empItems = _.map(_.get(this.props, 'employee_list.list', []), (employee, key) => {
      return <EmpListItem employee={employee} key={key} {...this.props}/>;
    });

    return (
      <MuiThemeProvider>
        <div ref="items" onWheel={this.onWhell} className='emp-list'>
          {empItems}
        </div>
      </MuiThemeProvider>
    );
  }
}

