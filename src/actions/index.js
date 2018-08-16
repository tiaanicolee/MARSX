import FormData from 'form-data'
import fetch from 'isomorphic-fetch'
import convert from 'xml-to-json-promise'

// =================================================
// CONSTANTS
// =================================================
export const SEND_LOGIN_REQUEST = 'send_login_request'
export const LOGIN_REQUEST = 'login_request'
export const LOGIN_SUCCESS = 'login_success'
export const LOGIN_FAILURE = 'login_failure'
export const LOGOUT = 'logout'
// =================================================
// END OF CONSTANTS
// =================================================


// =================================================
// LOGIN_PAGE ACTIONS
// =================================================
export function logout(){
    return{
        type: LOGOUT
    }
}
export function loginRequest() {
    return {
      type: LOGIN_REQUEST
    }
}

export function loginSuccess(usercode) {
    return {
      type: LOGIN_SUCCESS,
      usercode
    }
  }

export function loginFailure(error) {
    return {
      type: LOGIN_FAILURE,
      error
    }
}

export function sendLoginRequest(username,password) {
    return (dispatch) => {
        dispatch(loginRequest())
        var form = new FormData()
        form.append('username', username)
        form.append('password', password)
        var request = {method: 'POST', body: form}
        return fetch('https://sesardev.geosamples.org/webservices/credentials_service_v2.php', request)
          .then(handleErrors)
          .then(response => response.text())
          .then(responseText => convert.xmlDataToJSON(responseText, {explicitArray: false}))
          .then(responseJson => responseJson.results.user_codes.user_code)
          .then(usercode => {
            dispatch(loginSuccess(usercode))
            return usercode // return promise so that the submit handler knows to change routes on success
          })
          .catch(response => {
            if(response.message === '401')
              dispatch(loginFailure('Your username and password do not match a GeoPass account.'))
            else
              dispatch(loginFailure('Network connectivity error. Check your network connection.'))
          })
      }
}
function handleErrors(response) {
    if (!response.ok) throw Error(response.status)
    return response
  }
  // =================================================
  // END OF LOGIN_PAGE ACTIONS
  // =================================================