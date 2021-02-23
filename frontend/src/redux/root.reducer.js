import { combineReducers } from 'redux';

import services from './services/services.reducer';
import user from './user/user.reducer';

const rootReducer = combineReducers({ services, user });

export default rootReducer;