import _ from 'lodash';
import moment from 'moment';

const profileFilling = () => {
  const fields = [
    { field: 'photo', filling: 20 },
    { field: 'last_name', filling: 5 },
    { field: 'first_name', filling: 5 },
    { field: 'gender', filling: 5 },
    { field: 'birthday', filling: 5 },
    { field: 'position', filling: 10 },
    { field: 'skill', filling: 5 },
    { field: 'characteristic', filling: 10 }
  ];

  return {SKILL: 'skill', BIRTHDAY: 'birthday', GENDER: 'gender', FIELDS: fields};
};

const gender_choice = () => {
  return [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' }
  ];
};

export default class Employee {
  constructor(employee) {
    this.id = employee.id || null;
    this.photo = employee.photo || null;
    this.first_name = employee.first_name || '';
    this.last_name = employee.last_name || '';
    this.gender = employee.gender || '';
    this.position = employee.position || '';
    this.skill = employee.skill || [];
    this.description = employee.description || '';
    this.characteristic = employee.characteristic || '';
    this.birthday = employee.birthday || null;
  }

  getPhoto() {
    return this.photo ? this.photo : 'http://dummyimage.com/150x150/c0c0c0';
  }

  getBirthday() {
    return this.birthday ? moment(this.birthday).format('DD.MM.YYYY') : '';
  }

  getGender() {
    return _.get(_.find(gender_choice(), ['id', this.gender]), 'value', '');
  }

  getGenderBirthString() {
    return this.getGender() + (this.birthday && this.gender ? ', ' : '') + this.getBirthday();
  }

  calcProgress() {
    const profile = profileFilling();
    let progress = 0;
    _.forEach(profile.FIELDS, value => {
      if (_.isArray(this[value.field]) && profile.SKILL === value.field) {
        progress += value.filling * this[value.field].length;
      } else if (!_.isEmpty(this[value.field])) {
        progress += value.filling;
      } else if (_.isDate(this[value.field]) && profile.BIRTHDAY === value.field) {
        progress += value.filling;
      } else if (_.isNumber(this[value.field]) && profile.GENDER === value.field) {
        progress += value.filling;
      }
    });

    return progress > 100 ? 100 : progress;
  }
};
