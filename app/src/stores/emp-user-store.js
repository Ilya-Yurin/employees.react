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

      case EmpConstants.ADD_EMPLOYEE: {
        return Immutable.fromJS({employee: new Employee(_.get(action, 'employee.data', null))}).toMap();
      }

      case EmpConstants.CLOSE_EMPLOYEE: {
        return Immutable.fromJS({}).toMap();
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
