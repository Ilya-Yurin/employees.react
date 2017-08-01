import React from 'react';
import Chip from 'material-ui/Chip';
import AutoComplete from 'material-ui/AutoComplete';

import './emp-tag-input.styl';

export const EmpTagInput = props => {

  const state = {
    searchText: '',
  };

  const styles = {
    skillStyle: {fontSize: '16px', color: '#fff'}
  };

  const skills = [ "AngualrJS", "React", "HTML", "CSS", "JSON", "nodeJs" ];

  const addSkill = (string, index) => {
    console.log('add skill: ', string);
  };

  const updateInput = (searchText) => {
    console.log('update input: ', searchText);
  };

  const deleteSkill = (skill) => {
    console.log('remove skill: ', skill);
  };

  return (
    <div className="emp-tag-input">
      <Chip
        className="emp-tag-input__skill"
        onRequestDelete={() => deleteSkill(1)}
        key="1"
        labelStyle={styles.skillStyle}>
        AngularJs
      </Chip>
      <Chip
        className="emp-tag-input__skill"
        onRequestDelete={() => deleteSkill(2)}
        key="2"
        labelStyle={styles.skillStyle}>
        React
      </Chip>
      <Chip
        className="emp-tag-input__skill"
        onRequestDelete={() => deleteSkill(3)}
        key="3"
        labelStyle={styles.skillStyle}>
        HTML
      </Chip>
      <AutoComplete
        className="emp-tag-input__auto-complete"
        openOnFocus={true}
        underlineShow={false}
        hintText="typing..."
        dataSource={skills}
        onNewRequest={addSkill}
        onUpdateInput={updateInput}
        searchText={state.searchText}/>
    </div>
  )
};
