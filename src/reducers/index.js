/**
 * Created by leichen on 2017/1/15.
 */
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
    libraries: LibraryReducer,
    SelectionReducerId: SelectionReducer
})