import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../redux/root.reducer';

const configureStore = () => {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
  return store;
}

export default configureStore;