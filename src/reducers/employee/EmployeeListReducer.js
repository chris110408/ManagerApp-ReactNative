/**
 * Created by leichen on 2017/1/20.
 */
import { EMPLOYEE_FETCH  } from '../../actions/employee/type';

const INIT_STATE = {};

export default  (state = INIT_STATE, action) => {
    switch (action.type) {

        case EMPLOYEE_FETCH:
            return action.payload;
        default:
            return state
    }
}