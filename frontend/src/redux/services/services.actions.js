import { fetchServices, newService } from '../../utils/services';
import { FETCH_BATCH, NEW_SERVICE } from './services.types';

const getServices = (loadFrom, itemsInBatch) => async (dispatch) => {
  try {
    const { data } = await fetchServices(loadFrom, itemsInBatch);
    
    dispatch({ type: FETCH_BATCH, payload: data });
  } catch (err) {
    console.log(err.message);
  }
}

const createService = (serviceData) => async (dispatch) => {
  try {
    const { data } = await newService(serviceData);

    dispatch({ type: NEW_SERVICE, payload: data })
  } catch (err) {
    console.log(err.message);
  }
}

export { getServices, createService };