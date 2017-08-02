import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './emp-info.styl';

export const EmpInfo = props => {
  const styles = {
    buttonRoot: {margin: 12, borderRadius: '5px'},
    label: {textTransform: 'none', fontSize: '18px'},
    buttonSave: {backgroundColor: '#f2ac48', borderRadius: '5px', height: '56px', width: "220px", lineHeight: '56px'},
    buttonDel: {backgroundColor: '#D95464', borderRadius: '5px', height: '56px', width: "220px", lineHeight: '56px'},
    overlay: {height: '56px', width: "220px", borderRadius: '5px'}
  };

  return (
    <div className="emp-info">
    <div className="emp-info__close-button">
      <i className="fa fa-times-circle-o emp-app__fa-button"/>
    </div>
    <div className="emp-info__container">
      <div className="emp-info__container-left">
        <div className="emp-info__avatar">
          <img className="emp-info__container-avatar" src="http://dummyimage.com/150x150/c0c0c0"/>
        </div>
      </div>
      <div className="emp-info__container-detail">
        <div className="emp-info__row">
          <div className="emp-info__row-name">First Last</div>
          <div className="emp-info__row-data">(Female, 22.08.1990)</div>
        </div>
        <div className="emp-info__row">
          <div className="emp-info__row-data">Some text</div>
        </div>
        <div className="emp-info__row">
          <div className="emp-app__user-skills">
            <span className="emp-info__skills-tag">html</span>
            <span className="emp-info__skills-tag">css</span>
            <span className="emp-info__skills-tag">webpack</span>
            <span className="emp-info__skills-tag">nodejs</span>
            <span className="emp-info__skills-tag">angularjs</span>
            <span className="emp-info__skills-tag">reactjs</span>
            <span className="emp-info__skills-tag">git</span>
            <span className="emp-info__skills-tag">rest</span>
          </div>
        </div>
        <div className="emp-info__row">
          <div className="emp-info__row-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>



        <div className="emp-info__buttons">
          <RaisedButton label="Edit"
                        primary={true}
                        style={styles.buttonRoot}
                        labelStyle={styles.label}
                        buttonStyle={styles.buttonSave}
                        overlayStyle={styles.overlay}/>
          <RaisedButton label="Delete"
                        primary={true}
                        style={styles.buttonRoot}
                        labelStyle={styles.label}
                        buttonStyle={styles.buttonDel}
                        overlayStyle={styles.overlay}/>
        </div>
      </div>
    </div>
  </div>
)};
