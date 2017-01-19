/**
 * Created by leichen on 2017/1/16.
 */
import {EMAIL_CHANGE,PASSWORD_CHANGE} from '../actions/type'

const INIT_STATE = { email:'', password:'' };

export default (state = INIT_STATE, action) => {

    switch(action.type){
        case EMAIL_CHANGE:
            return {...state,email:action.payload};
        case PASSWORD_CHANGE:
            return {...state,password:action.payload};
        default:
            return state
    }

};