import React from 'react';
import Avatar from 'material-ui/Avatar';
import Employee from '../../../models/employee';
import './emp-list-item.styl';
import _ from 'lodash';

export const EmpListItem = props => {
  const employee = _.get(props, 'employee', new Employee({}));
  const progressStyle = () => ({backgroundColor: employee.getProfileFillingColor(), top: employee.getTopProfileFilling() + "%"});
  const openEmployee = () => {
    props.history.push('/employee/' + employee.id);
  };
  const skills = _.map( _.get(employee, 'skill', []), (skill, key) => {
    return <span className="emp-list-item__skills-tag" key={key}>{skill}</span>;
  });

  return (
    <div className={props.className ? props.className : 'emp-list-item'} onClick={openEmployee}>
      <div className="emp-list-item__progress" style={progressStyle()}/>
      <div className="emp-list-item__img">
        <Avatar src={employee.getPhoto()} size={50}/>
      </div>
      <div className="emp-list-item__data">
        <div className="emp-list-item__name">
          {employee.first_name} {employee.last_name}
        </div>
        <div className="emp-list-item__position">
          {employee.position}
        </div>
        <div className="emp-app__user-skills">
          {skills}
        </div>
      </div>
    </div>
  );
};
