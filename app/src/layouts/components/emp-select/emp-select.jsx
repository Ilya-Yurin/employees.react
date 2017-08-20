import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './emp-select.styl';
import _ from 'lodash';

export const EmpSelect = props => {
  const styles = {
    selectStyle: {
      fontSize: '20px',
      color: '#fff'
    },
    selectListStyle: {
      fontSize: '22px',
      backgroundColor: 'black',
      color: '#fff',
      paddingTop: '0',
      paddingBottom: '0',
      borderRadius: '5px',
    },
    menuItemStyle: {
      color: '#fff',
      fontSize: '18px',
      padding: '10px 5px',
    },
    hintStyle: {
      fontSize: '18px',
      color: '#fff',
      padding: '0 24px',
      margin: 'auto',
      top: '18px'
    },
    rootStyle: {
      color: '#fff',
      borderRadius: '5px',
      backgroundColor: 'black',
      width: '220px',
      boxShadow: 'none',
      height: '100%'
    },
    selectItemFirstStyle: {
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px'
    },
    selectItemLastStyle: {
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px'
    }
  };

  const handleChange = (event, index, value) => props.onSelectGender(value);

  return (
    <div className="emp-select">
      <SelectField selectedMenuItemStyle={{ backgroundColor: "#333", color: '#fff' }}
                   menuItemStyle={styles.menuItemStyle}
                   underlineShow={false}
                   hintText="Select Gender"
                   floatingLabelStyle={styles.selectStyle}
                   listStyle={styles.selectListStyle}
                   menuStyle={{color: 'fff'}}
                   labelStyle={{color: 'fff', padding: '0 24px', margin: 'auto', top: '0'}}
                   hintStyle={styles.hintStyle}
                   style={styles.rootStyle}
                   value={props.value ? _.parseInt(props.value) : null}
                   onChange={handleChange}>
        <MenuItem className="emp-select__item"
                  style={styles.selectItemFirstStyle}
                  value={1}
                  primaryText="Male"/>
        <MenuItem className="emp-select__item"
                  style={styles.selectItemLastStyle}
                  value={2}
                  primaryText="Female"/>
      </SelectField>
    </div>
  );
};

