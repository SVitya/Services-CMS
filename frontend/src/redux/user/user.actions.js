import { signIn, signUp } from '../../utils/user';
import { AUTH } from './user.types';

const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await signIn(formData);

    dispatch({ type: AUTH, payload: data });

    router.push('/');
  } catch (err) {
    console.log(err);
  }
};

const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await signUp(formData);

    dispatch({ type: AUTH, payload: data });

    router.push('/');
  } catch (err) {
    console.log(err);
  }
};

export { signin, signup };