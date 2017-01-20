/**
 * Created by leichen on 2017/1/19.
 */

import EMPLOYEE_UPDATE from '../../actions/employee/type';

const INIT_STATE = {
    name:'',
    phone:'',
    shift: ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //ex : action.payload === {prop: 'name', value:'Chris'}
            return { ...state,[action.payload.prop]: action.payload.value }
        default:
            return state;
    }
}