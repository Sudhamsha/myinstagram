import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import photoReducer from './reducers/photos';
import messageReducer from './reducers/messages';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    photo: photoReducer,
    message: messageReducer
})

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)