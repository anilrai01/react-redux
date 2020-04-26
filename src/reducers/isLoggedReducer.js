const defaultState = {
    isLogged : false
}

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const isLoggedReducer = (state = defaultState, action) => {
    switch(action.type){
        case LOGIN:
            return Object.assign({}, state, {isLogged : true});
            break;
        case LOGOUT:
            return Object.assign({}, state, {isLogged: false})
            break;
        default:
            return state;
    }
}

export default isLoggedReducer;