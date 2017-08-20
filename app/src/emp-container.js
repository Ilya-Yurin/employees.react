import {Container} from 'flux/utils';
import EmpApp from './emp-app';
import EmpUserStore from './stores/emp-user-store';
import EmpTagStore from './stores/emp-tag-store';
import EmpActions from './actions/emp-actions';

function getStores() {
  return [EmpUserStore, EmpTagStore];
}

function getState() {
  return {
    employee_list: EmpUserStore.getState().toJS(),
    tags: EmpTagStore.getState().toJS(),

    onEmployeeAdd: EmpActions.addEmployee,
    onEmployeeEdit: EmpActions.editEmployee,
    onEmployeeDelete: EmpActions.deleteEmployee,
    onGetEmployeeList: EmpActions.fetchEmployeeList,
    onGetTagList: EmpActions.fetchTagList,
    onCreateTag: EmpActions.addTag,
  };
}
export default Container.createFunctional(EmpApp, getStores, getState);
