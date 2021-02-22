import { FETCH_BATCH } from './services.types';

const servicesReducer = (services = { loadedServices: []}, action) => {
  switch(action.type) {
    case FETCH_BATCH:
      return { loadedServices: [...services.loadedServices, ...action.payload.loadedServices], servicesAmount: action.payload.servicesAmount };
    default:
      return services;
  }
}

export default servicesReducer;