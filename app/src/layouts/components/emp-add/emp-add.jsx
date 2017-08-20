import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import {EmpTagInput} from '../emp-tag-input/emp-tag-input';
import {EmpSelect} from '../emp-select/emp-select';
import {EmpDatePicker} from '../emp-date-picker/emp-date-picker';
import Employee from '../../../models/employee';
import _ from 'lodash';

import './emp-add.styl';

export class EmpAdd extends Component {
  constructor(props) {
    super(props);
    let id = _.get(props, 'match.params.id', null);
    this.state = {
      employee: id
        ? _.extend(new Employee({}), _.find(_.get(props, 'employee_list.list', []), ['id', _.parseInt(id)]))
        : new Employee({})
    };

    this.onSelectGender = this.onSelectGender.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onAddSkill = this.onAddSkill.bind(this);
    this.onDeleteSkill = this.onDeleteSkill.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onPositionChange = this.onPositionChange.bind(this);
    this.onCharacteristicChange = this.onCharacteristicChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onAddSkill(value) {
    let employee = this.state.employee;
    employee.skill = _.concat(employee.skill, [value]);
    this.setState({employee: employee});
  }

  onDeleteSkill(index) {
    let employee = this.state.employee;
    employee.skill = _.without(employee.skill, employee.skill[index]);
    this.setState({employee: employee});
  }

  onSelectGender(value) {
    let employee = this.state.employee;
    employee.gender = value;
    this.setState({employee: employee});
  }

  onChangeDate(value) {
    let employee = this.state.employee;
    employee.birthday = value;
    this.setState({employee: employee});
  }

  onFirstNameChange(event) {
    let employee = this.state.employee;
    employee.first_name = event.target.value;
    this.setState({employee: employee});
  }

  onLastNameChange(event) {
    let employee = this.state.employee;
    employee.last_name = event.target.value;
    this.setState({employee: employee});
  }

  onPositionChange(event) {
    let employee = this.state.employee;
    employee.position = event.target.value;
    this.setState({employee: employee});
  }

  onCharacteristicChange(event) {
    let employee = this.state.employee;
    employee.characteristic = event.target.value;
    this.setState({employee: employee});
  }

  onSave() {
    _.get(this.state, 'employee.id')
      ? this.props.onEmployeeEdit(this.state.employee)
      : this.props.onEmployeeAdd(this.state.employee);
  }

  render() {
    const styles = {
      inputStyle: {width: "49%", fontSize: "22px", color: "#6b6b6b"},
      inputSingleStyle: {width: "100%", fontSize: "22px", color: "#6b6b6b"},
      buttonRootStyle: {margin: 12, borderRadius: '5px'},
      labelStyle: {textTransform: 'none', fontSize: '18px'},
      buttonStyle: {
        backgroundColor: '#51BD87',
        borderRadius: '5px',
        height: '56px',
        width: "220px",
        lineHeight: '56px'
      },
      overlayStyle: {height: '56px', width: "220px", borderRadius: '5px'}
    };

    return (
      <div className="emp-add">
        <div className="emp-add__close-button">
          <Link to={'/'}>
            <i className="fa fa-times-circle-o emp-app__fa-button"/>
          </Link>
        </div>
        <div className="emp-add__container">
          <div className="emp-add__container-left">
            <div className="emp-add__container-avatar">
              <a href="#">
                <img className="emp-add__avatar"
                     width="150"
                     src={this.state.employee.getPhoto()}/>
              </a>
            </div>
            <div className="emp-add__profile-progress">
              Filled profile: {this.state.employee.calcProgress()}%
            </div>
          </div>
          <div className="emp-add__container-form">
            <div className="emp-add__row-input">
              <TextField style={styles.inputStyle}
                         floatingLabelText="First name"
                         value={this.state.employee.first_name}
                         onChange={this.onFirstNameChange}/>
              <TextField style={styles.inputStyle} floatingLabelText="Last name"
                         value={this.state.employee.last_name}
                         onChange={this.onLastNameChange}/>
            </div>
            <TextField style={styles.inputSingleStyle}
                       floatingLabelText="Position"
                       value={this.state.employee.position}
                       onChange={this.onPositionChange}/>
            <EmpTagInput skills={this.state.employee.skill}
                         onDeleteSkill={this.onDeleteSkill}
                         onAddSkill={this.onAddSkill}
                         {...this.props}/>
            <div className="emp-add__row-button">
              <EmpSelect value={this.state.employee.gender} onSelectGender={this.onSelectGender} {...this.props}/>
              <EmpDatePicker value={this.state.employee.birthday} onChangeDate={this.onChangeDate} {...this.props}/>
            </div>
            <TextField style={styles.inputSingleStyle}
                       multiLine={true}
                       rows={7}
                       floatingLabelText="Set characteristic..."
                       value={this.state.employee.characteristic}
                       onChange={this.onCharacteristicChange}/>
            <div className="emp-add__save-button">
              <RaisedButton label="Save"
                            primary={true}
                            style={styles.buttonRootStyle}
                            labelStyle={styles.labelStyle}
                            buttonStyle={styles.buttonStyle}
                            overlayStyle={styles.overlayStyle}
                            onTouchTap={this.onSave}/>
            </div>
          </div>
        </div>
      </div>
    )
  };

}
