import axios from 'axios';

const baseUrl = axios.create({ baseUrl: 'http://localhost:5000'});

const signUp = formData => baseUrl.post('/user/signup', formData);
const signIn = formData => baseUrl.post('/user/signin', formData);

export { signIn, signUp };