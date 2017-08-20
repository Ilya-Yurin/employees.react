import EmpDispatcher from '../emp-dispatcher';
import EmpConstants from '../emp-constants';
import api from '../emp-api/emp-api';
import _ from 'lodash';

const EmpActions = {

  fetchEmployeeList() {
    api.getEmployeeList()
      .then(data => {
        EmpDispatcher.dispatch({
          type: EmpConstants.FETCH_EMPLOYEE_LIST,
          items: data
        });
      })
      .catch(err => {
        EmpDispatcher.dispatch({
          type: EmpConstants.FAIL,
          error: err
        });
      });
  },

  fetchTagList() {
    api.getTags()
      .then(data => {
        EmpDispatcher.dispatch({
          type: EmpConstants.FETCH_TAG_LIST,
          tags: data
        });
      })
      .catch(err => {
        EmpDispatcher.dispatch({
          type: EmpConstants.FAIL,
          error: err
        });
      });
  },

  addTag(tag) {
    api.addTag(tag)
      .then(data => {
        EmpDispatcher.dispatch({
          type: EmpConstants.ADD_TAG,
          tag: data
        });
      })
      .catch(err => {
        EmpDispatcher.dispatch({
          type: EmpConstants.FAIL,
          error: err
        });
      });
  },

  addEmployee(employee) {
    api.createEmployee(employee)
      .then(data => {
        EmpDispatcher.dispatch({
          type: EmpConstants.ADD_EMPLOYEE,
          employee: data
        });
      })
      .catch(err => {
        EmpDispatcher.dispatch({
          type: EmpConstants.FAIL,
          error: err
        });
      });
  },

  editEmployee(employee) {
    api.updateEmployee(_.get(employee, 'id'), employee)
      .then(data => {
        EmpDispatcher.dispatch({
          type: EmpConstants.EDIT_EMPLOYEE,
          employee: data
        });
      })
      .catch(err => {
        EmpDispatcher.dispatch({
          type: EmpConstants.FAIL,
          error: err
        });
      });
  },

  deleteEmployee(id) {
    api.deleteEmployee(id)
      .then(() => {
        EmpDispatcher.dispatch({
          type: EmpConstants.DELETE_EMPLOYEE,
          id: id
        });
      })
      .catch(err => {
        EmpDispatcher.dispatch({
          type: EmpConstants.FAIL,
          error: err
        });
      });
  }
};

export default EmpActions;
