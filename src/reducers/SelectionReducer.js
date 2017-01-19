/**
 * Created by leichen on 2017/1/16.
 */
export default (state = null, action) => {

    switch(action.type){
        case 'select_library':
            return action.payload;
        default:
            return state;
    }

};