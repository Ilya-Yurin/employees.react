import {ReduceStore} from 'flux/utils'
import Immutable from 'immutable';

import EmpDispatcher from '../emp-dispatcher';
import EmpConstants from '../emp-constants';
import Employee from '../models/employee';
import _ from 'lodash';

class EmpUserStore extends ReduceStore {

  constructor() {
    super(EmpDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {

      case EmpConstants.FETCH_EMPLOYEE_LIST: {
        let employee_list = _.map(_.get(action, 'items.data', []), employee => new Employee(employee));
        return state.set('list', Immutable.fromJS(employee_list).toOrderedMap());
      }

      case EmpConstants.ADD_EMPLOYEE: {
        const employee = new Employee(_.get(action, 'employee.data', null));

        return state.update('list', list => {
          return list.toList().concat(Immutable.fromJS([employee]).toMap()).toOrderedMap();
        });
      }

      case EmpConstants.EDIT_EMPLOYEE: {
        const employee = new Employee(_.get(action, 'employee.data', null));

        return state.update('list', list => {
          return Immutable.fromJS(_.map(list.toList().toJS(), e => e.id == employee.id ? employee : e)).toOrderedMap();
        });
      }

      case EmpConstants.DELETE_EMPLOYEE: {
        const id = _.parseInt(_.get(action, 'id'));

        return state.update('list', list => {
          return Immutable.fromJS(_.filter(list.toList().toJS(), e => e.id !== id)).toOrderedMap();
        });
      }

      case EmpConstants.FAIL: {
        return Immutable.fromJS({error: action.error}).toOrderedMap();
      }

      default: {
        return state;
      }
    }
  }
}

export default new EmpUserStore();
