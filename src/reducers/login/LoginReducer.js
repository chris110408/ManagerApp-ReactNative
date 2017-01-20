/**
 * Created by leichen on 2017/1/16.
 */
import {EMAIL_CHANGE,PASSWORD_CHANGE,LOGIN_SUCCESS,LOGIN_FAIL, LOGIN_START} from '../../actions/auth/type'

const INIT_STATE = { email:'', password:'',error:'', loading: false ,user:null};

export default (state = INIT_STATE, action) => {
    console.log(action)
    switch(action.type){
        case EMAIL_CHANGE:
            return {...state,email:action.payload};
        case PASSWORD_CHANGE:
            return {...state,password:action.payload};
        case LOGIN_SUCCESS:
            return {...state,user:action.payload,loading:false,error:''}
        case LOGIN_FAIL:
            return {...state,...INIT_STATE,error:action.payload}
        case LOGIN_START:
            return {...state,loading: true}
        default:
            return state
    }

};