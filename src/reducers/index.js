/**
 * Created by leichen on 2017/1/15.
 */
import { combineReducers } from 'redux';
import LoginReducer from './login/LoginReducer'
import EmployeeReducer from './employee/EmployeeFormReducer'

export default combineReducers({
    auth: LoginReducer,
    employeeForm:EmployeeReducer
});