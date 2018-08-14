import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from '../actions'
import InitialState from '../actions/InitialState'

const newState = Object.assign({}, InitialState)

export default function(state = InitialState, action){
    switch(action.type) {
        case LOGOUT:
            return InitialState;
        case LOGIN_REQUEST:
            newState.isRequestingLogin = true;
            return newState;
        case LOGIN_SUCCESS:
            newState.usercode = action.usercode;
            newState.isRequestingLogin = false;
            newState.isSuccessfulLogin = true;
            console.log('====================');
            console.log("AUTHORIZATION SUCCESS");
            console.log(newState);
            console.log('====================');
            return newState;
        case LOGIN_FAILURE:
            console.log('====================');
            console.log("AUTHORIZATION FAILURE");
            console.log(action.error);
            console.log('====================');
            return InitialState;
        default:
            return InitialState;
    }
}
