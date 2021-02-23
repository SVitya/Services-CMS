import { AUTH, LOGOUT } from './user.types';

const authReducer = (state = { isSignIn: JSON.parse(localStorage.getItem('profile')) ? true : false }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
      return { ...state, isSignIn: true };
    case LOGOUT:
      localStorage.clear();
      return { ...state, isSignIn: false };
    default:
      return state;
  }
};

export default authReducer;