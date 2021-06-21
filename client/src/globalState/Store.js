import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Reducer.js';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
  
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// const store = createStore(
//     reducer,
//     applyMiddleware(thunkMiddleware)
// );

// export default store;
export default store;