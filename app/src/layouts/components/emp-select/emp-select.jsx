import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './emp-select.styl';

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


  return (
    <div className="emp-select">
      <SelectField selectedMenuItemStyle={{ backgroundColor: "#333" }}
                   menuItemStyle={styles.menuItemStyle}
                   underlineShow={false}
                   hintText="Select Gender"
                   floatingLabelStyle={styles.selectStyle}
                   listStyle={styles.selectListStyle}
                   hintStyle={styles.hintStyle}
                   style={styles.rootStyle}>
        <MenuItem className="emp-select__item" style={styles.selectItemFirstStyle} value={null} primaryText="Select Gender"/>
        <MenuItem className="emp-select__item" value={0} primaryText="Male"/>
        <MenuItem className="emp-select__item" style={styles.selectItemLastStyle} value={1} primaryText="Female"/>
      </SelectField>
    </div>
  );
};

