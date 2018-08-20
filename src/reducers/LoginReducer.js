import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from '../actions'
//import InitialState from '../actions/InitialState'

export default function Login(state = [], action){
    switch(action.type) {
        case LOGOUT:
            return state;
        case LOGIN_REQUEST:
            return Object.assign({}, state,

              {
                0 :
                  {
                    usercode: "",
                    isRequestingLogin: false,
                    isSuccessfulLogin: false,
                  }

              }
              )
        case LOGIN_SUCCESS:

            console.log('====================');
            console.log("AUTHORIZATION SUCCESS");
            console.log(action.usercode)
            console.log('====================');
            return Object.assign({}, state,

            {
              0 :
                {
                  usercode: action.usercode,
                  isRequestingLogin: false,
                  isSuccessfulLogin: true
                }

            }
            )
        case LOGIN_FAILURE:
            console.log('====================');
            console.log("AUTHORIZATION FAILURE");
            console.log(action.error);
            console.log('====================');
            return state;
        default:
            return state;
    }
}
