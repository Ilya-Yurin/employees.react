import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { EmpTagInput } from '../emp-tag-input/emp-tag-input';
import { EmpSelect } from '../emp-select/emp-select';
import { EmpDatePicker } from '../emp-date-picker/emp-date-picker';

import './emp-add.styl';

export const EmpAdd = props => {
  const styles = {
    inputStyle: {width: "49%", fontSize: "22px", color: "#6b6b6b"},
    inputSingleStyle: {width: "100%", fontSize: "22px", color: "#6b6b6b"},
    buttonRootStyle: {margin: 12, borderRadius: '5px'},
    labelStyle: {textTransform: 'none', fontSize: '18px'},
    buttonStyle: {backgroundColor: '#51BD87', borderRadius: '5px', height: '56px', width: "220px", lineHeight: '56px'},
    overlayStyle: {height: '56px', width: "220px", borderRadius: '5px'}
  };

  return (
    <div className="emp-add">
    <div className="emp-add__close-button">
      <i className="fa fa-times-circle-o emp-app__fa-button"/>
    </div>
    <div className="emp-add__container">
      <div className="emp-add__container-left">
        <div className="emp-add__avatar">
        <a href="#">
          <img className="emp-add__container-avatar" src="http://dummyimage.com/150x150/c0c0c0"/>
        </a>
        </div>
        <div className="emp-add__profile-progress">
          Filled profile: 20%
        </div>
      </div>
      <div className="emp-add__container-form">
        <div className="emp-add__row-input">
          <TextField style={styles.inputStyle} floatingLabelText="First name"/>
          <TextField style={styles.inputStyle} floatingLabelText="Last name"/>
        </div>
        <TextField style={styles.inputSingleStyle} floatingLabelText="Position"/>
        <EmpTagInput/>
        <div className="emp-add__row-button">
          <EmpSelect/>
          <EmpDatePicker/>
        </div>
        <TextField style={styles.inputSingleStyle}
                   multiLine={true}
                   rows={7}
                   floatingLabelText="Set characteristic..."/>
        <div className="emp-add__save-button">
          <RaisedButton label="Save"
                        primary={true}
                        style={styles.buttonRootStyle}
                        labelStyle={styles.labelStyle}
                        buttonStyle={styles.buttonStyle}
                        overlayStyle={styles.overlayStyle}/>
        </div>
      </div>
    </div>
  </div>
)};
