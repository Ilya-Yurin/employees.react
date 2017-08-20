import {ReduceStore} from 'flux/utils'
import Immutable from 'immutable';

import EmpDispatcher from '../emp-dispatcher';
import EmpConstants from '../emp-constants';
import _ from 'lodash';

class EmpTagStore extends ReduceStore {

  constructor() {
    super(EmpDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {

      case EmpConstants.FETCH_TAG_LIST: {
        return state.set('list', Immutable.fromJS(_.get(action, 'tags.data', [])).toOrderedMap());
      }

      case EmpConstants.ADD_TAG: {
        const tag = _.get(action, 'tag.data');

        return state.update('list', list => {
          return list.toList().push(Immutable.fromJS(tag).toMap()).toOrderedMap();
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

export default new EmpTagStore();
