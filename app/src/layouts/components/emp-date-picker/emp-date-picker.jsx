import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import './emp-date-picke.styl';

export const EmpDatePicker = props => {

  const styles = {
    textFieldStyle: {
      fontSize: '20px',
      color: '#fff',
      paddingTop: '12px',
      width: '220px',
    },
    rootStyle: {
      fontSize: '20px',
      color: '#fff',
      width: '220px',
    },
    hintStyle: {
      fontSize: '18px',
      color: '#fff',
      padding: '0 24px',
      margin: '0 5px',
      top: '18px'
    }
  };
  const handleChange = (event, date) => props.onChangeDate(date);

  return (
    <div className="emp-date-picker">
      <DatePicker className="emp-date-picker__button"
                  hintText="Birthday"
                  textFieldStyle={styles.textFieldStyle}
                  underlineShow={false}
                  hintStyle={styles.hintStyle}
                  style={styles.rootStyle}
                  onChange={handleChange}
                  value={props.value ? new Date(props.value) : null}/>
    </div>
  );
};

