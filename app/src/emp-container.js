import {Container} from 'flux/utils';
import EmpApp from './emp-app';
import EmpUserStore from './stores/emp-user-store';
import EmpUserListStore from './stores/emp-user-list-store';
import EmpTagStore from './stores/emp-tag-store';
import EmpActions from './actions/emp-actions';

function getStores() {
  return [EmpUserListStore, EmpTagStore, EmpUserStore];
}

function getState() {
  return {
    employee_list: EmpUserListStore.getState().toJS(),
    tags: EmpTagStore.getState().toJS(),
    new_employee: EmpUserStore.getState().toJS(),

    onEmployeeAdd: EmpActions.addEmployee,
    onEmployeeEdit: EmpActions.editEmployee,
    onEmployeeDelete: EmpActions.deleteEmployee,
    onGetEmployeeList: EmpActions.fetchEmployeeList,
    onGetTagList: EmpActions.fetchTagList,
    onCreateTag: EmpActions.addTag,
    onCloseEmployee: EmpActions.closeEmployee,
  };
}
export default Container.createFunctional(EmpApp, getStores, getState);
