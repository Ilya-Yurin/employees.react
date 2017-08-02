import React from 'react';
import Avatar from 'material-ui/Avatar';
import './emp-list-item.styl';

export const EmpListItem = props => {

  const progressStyle = () => ({backgroundColor: "#429321", top: "55%"});

  return (
    <div className={props.className ? props.className : 'emp-list-item'}>
      <div className="emp-list-item__progress" style={progressStyle()}/>
      <div className="emp-list-item__img">
        <Avatar src="" size={50}/>
      </div>
      <div className="emp-list-item__data">
        <div className="emp-list-item__name">
          F.Name L.Name
        </div>
        <div className="emp-list-item__position">
          Front-end developer
        </div>
        <div className="emp-app__user-skills">
          <span className="emp-list-item__skills-tag">html</span>
          <span className="emp-list-item__skills-tag">css</span>
          <span className="emp-list-item__skills-tag">webpack</span>
          <span className="emp-list-item__skills-tag">nodejs</span>
          <span className="emp-list-item__skills-tag">angularjs</span>
          <span className="emp-list-item__skills-tag">reactjs</span>
          <span className="emp-list-item__skills-tag">git</span>
          <span className="emp-list-item__skills-tag">rest</span>
        </div>
      </div>
    </div>
  );
};
