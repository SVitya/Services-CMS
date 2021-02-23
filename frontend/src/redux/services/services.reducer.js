import { FETCH_BATCH, NEW_SERVICE } from './services.types';

const servicesReducer = (services = { loadedServices: []}, action) => {
  switch(action.type) {
    case FETCH_BATCH:
      return { loadedServices: [...services.loadedServices, ...action.payload.loadedServices], servicesAmount: action.payload.servicesAmount };
    case NEW_SERVICE:
      return { loadedServices: [...services.loadedServices, action.payload] }
    default:
      return services;
  }
}

export default servicesReducer;