import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Employee from '../../../models/employee';
import './emp-info.styl';
import _ from 'lodash';

export class EmpInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employee: _.get(this.props, 'employee', new Employee({})),
      isDeleteDialogOpen: false
    };
  }

  componentWillMount() {
    if(!_.get(this.props, 'employee')) {
      this.props.history.push('/employee/not-found');
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({employee: _.get(nextProps, 'employee', new Employee({}))});
  }

  render() {
    const styles = {
      buttonRoot: {margin: '12px', borderRadius: '5px'},
      label: {textTransform: 'none', fontSize: '18px'},
      buttonSave: {backgroundColor: '#f2ac48', borderRadius: '5px', height: '56px', width: "220px", lineHeight: '56px'},
      buttonDel: {backgroundColor: '#D95464', borderRadius: '5px', height: '56px', width: "220px", lineHeight: '56px'},
      overlay: {height: '56px', width: "220px", borderRadius: '5px'}
    };

    const toEditEmployee = () => {
      this.props.history.push('/employee/' + this.state.employee.id + '/edit');
    };

    const skills = _.map(_.get(this.state.employee, 'skill', []), (skill, key) => {
      return <span className="emp-info__skills-tag" key={key}>{skill}</span>;
    });

    const handleOpenDialog = () => {
      this.setState({isDeleteDialogOpen: true});
    };

    const handleCloseDialog = () => {
      this.setState({isDeleteDialogOpen: false});
    };

    const onDeleteEmployee = () => {
      this.props.onEmployeeDelete(this.state.employee.id);
      this.props.onCloseEmployee();
      this.props.history.push('/');
    };

    const closeEmployee = () => {
      this.props.onCloseEmployee();
      this.props.history.push('/');
    };

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={handleCloseDialog}
      />,
      <FlatButton
        label="Yes"
        primary={true}
        onClick={onDeleteEmployee}
      />,
    ];

    return (
      <div className="emp-info">
        <div className="emp-info__close-button">
          <i className="fa fa-times-circle-o emp-app__fa-button" onClick={closeEmployee}/>
        </div>
        <div className="emp-info__container">
          <div className="emp-info__container-left">
            <div className="emp-info__container-avatar">
              <img className="emp-info__avatar" width="150" src={this.state.employee.getPhoto()}/>
            </div>
          </div>
          <div className="emp-info__container-detail">
            <div className="emp-info__row">
              <div className="emp-info__row-name">{this.state.employee.first_name} {this.state.employee.last_name}</div>
              <div className="emp-info__row-data">({this.state.employee.getGenderBirthString()})</div>
            </div>
            <div className="emp-info__row">
              <div className="emp-info__row-data">{this.state.employee.position}</div>
            </div>
            <div className="emp-info__row">
              <div className="emp-app__user-skills">
                {skills}
              </div>
            </div>
            <div className="emp-info__row">
              <div className="emp-info__row-text">
                {this.state.employee.characteristic}
              </div>
            </div>
            <div className="emp-info__buttons">
              <RaisedButton label="Edit"
                            primary={true}
                            style={styles.buttonRoot}
                            labelStyle={styles.label}
                            buttonStyle={styles.buttonSave}
                            overlayStyle={styles.overlay}
                            onTouchTap={toEditEmployee}/>
              <RaisedButton label="Delete"
                            primary={true}
                            style={styles.buttonRoot}
                            labelStyle={styles.label}
                            buttonStyle={styles.buttonDel}
                            overlayStyle={styles.overlay}
                            onTouchTap={handleOpenDialog}/>
              <Dialog
                title="Warning"
                actions={actions}
                modal={false}
                open={this.state.isDeleteDialogOpen}
                onRequestClose={handleCloseDialog}>
                Are you sure you want to delete this employee?
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    )
  };
}
