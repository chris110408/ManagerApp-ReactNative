/**
 * Created by leichen on 2017/1/16.
 */
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { EMAIL_CHANGE,PASSWORD_CHANGE,LOGIN_SUCCESS,LOGIN_FAIL,LOGIN_START} from './type'


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


export const loginUser = ({ email, password }) => {
    return (dispatch)=>{

        dispatch ({ type: LOGIN_START })
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then((user)=> loginUserSuccess(dispatch,user))
            .catch((error)=>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then((user)=> loginUserSuccess(dispatch,user))
                    .catch((err) => loginUserFail(dispatch,err.message))
            })
    }

}


const loginUserFail = (dispatch,err) => {
    dispatch({ type: LOGIN_FAIL, payload: err })
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_SUCCESS, payload: user })

    Actions.main();
}