/**
 * Created by leichen on 2017/1/19.
 */
import { EMPLOYEE_UPDATE } from './type'

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};