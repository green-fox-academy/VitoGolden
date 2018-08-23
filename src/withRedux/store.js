import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer/rootReaucer';


const store = createStore(rootReducer, composeWithDevTools());

export default store;
