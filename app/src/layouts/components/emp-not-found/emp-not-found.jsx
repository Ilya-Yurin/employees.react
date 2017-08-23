import React from 'react';
import {Link} from 'react-router-dom';
import './emp-not-found.styl';

export const EmpNotFound = props => {

  return (
    <div className="emp-not-found">
      <div className="emp-not-found__close-button">
        <Link to={'/'}>
        <i className="fa fa-times-circle-o emp-app__fa-button"/>
        </Link>
      </div>
      <div className="emp-not-found__container">
        <div className="emp-not-found__container-detail">
          <h1>Employee with same id is not found!</h1>
        </div>
      </div>
    </div>
  );
};

