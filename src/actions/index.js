/**
 * Created by leichen on 2017/1/16.
 */
import { EMAIL_CHANGE,PASSWORD_CHANGE} from './type'

export const emailChanged = (libraryId) => {
    return {
        type: EMAIL_CHANGE,
        payload: libraryId
    }
}

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGE,
        payload: password
    }
}