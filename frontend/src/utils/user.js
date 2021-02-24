import axios from 'axios';

const server = axios.create({ baseURL: process.env.REACT_APP_API_URI });

const signUp = formData => server.post('/user/signup', formData);
const signIn = formData => server.post('/user/signin', formData);

export { signIn, signUp };