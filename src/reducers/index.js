/**
 * Created by leichen on 2017/1/15.
 */
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer'

export default combineReducers({
    auth: LoginReducer
})