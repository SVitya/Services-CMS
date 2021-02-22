import { combineReducers } from 'redux';

import Services from './services/services.reducer';

const rootReducer = combineReducers({services: Services});

export default rootReducer;