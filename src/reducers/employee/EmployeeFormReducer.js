/**
 * Created by leichen on 2017/1/19.
 */

import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../../actions/employee/type';

const INIT_STATE = {
    name:'',
    phone:'',
    shift: 'Monday'
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            console.log(action.payload.prop)
            //ex : action.payload === {prop: 'name', value:'Chris'}
            return { ...state,[action.payload.prop] : action.payload.value }
        case EMPLOYEE_CREATE:
            return INIT_STATE;
        default:
            return state;
    }
}