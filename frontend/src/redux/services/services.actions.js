import { fetchServices } from '../../utils/services';
import { FETCH_BATCH } from './services.types';

const getServices = (loadFrom, itemsInBatch) => async (dispatch) => {
  try {
    const { data } = await fetchServices(loadFrom, itemsInBatch);
    dispatch({ type: FETCH_BATCH, payload: data });
  } catch (err) {
    console.log(err.message);
  }
}

export { getServices };