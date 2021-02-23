import axios from 'axios';

const server = axios.create({ baseUrl: 'http://localhost:5000'});

const signUp = formData => server.post('/user/signup', formData);
const signIn = formData => server.post('/user/signin', formData);

export { signIn, signUp };