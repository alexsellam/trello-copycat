import { createStore } from 'redux'
import rootReducer from '../reducers'
// eslint-disable-next-line

const store = createStore(rootReducer); 
export default store; 