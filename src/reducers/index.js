/**
 * Created by leichen on 2017/1/15.
 */
import { combineReducers } from 'redux';
import LoginReducer from './login/LoginReducer'
import EmployeeReducer from './employee/EmployeeFormReducer'
import employees from './employee/EmployeeListReducer'

export default combineReducers({
    auth: LoginReducer,
    employeeForm:EmployeeReducer,
    employees:employees
});