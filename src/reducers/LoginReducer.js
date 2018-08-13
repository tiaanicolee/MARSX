import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from '../actions'
import InitialState from '../actions/InitialState'

export default function(state = InitialState, action){
    switch(action.type) {
        case LOGOUT:
            return InitialState
        case LOGIN_REQUEST:
            const newStateRequest = Object.assign({}, InitialState)
            newStateRequest.isRequestingLogin = true
            return newStateRequest
        case LOGIN_SUCCESS:
            const newStateUsercode = Object.assign({}, state)
            newStateUsercode.usercode = action.usercode
            console.log('====================')
            console.log("AUTHORIZATION SUCCESS")
            console.log(newStateUsercode)
            console.log('====================')
            return newStateUsercode
        case LOGIN_FAILURE:
            console.log('====================')
            console.log("AUTHORIZATION FAILURE")
            console.log(action.error)
            console.log('====================')
            return InitialState
        default:
            return InitialState
    }
}