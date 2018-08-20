import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import InitialState from './actions/InitialState'
import rootReducer from './reducers/RootReducer'

export default function configureStore() {
    return createStore(
        rootReducer,
        InitialState,
        composeWithDevTools(applyMiddleware(thunk)),
    );
}
