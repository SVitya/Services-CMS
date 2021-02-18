import axios from 'axios';

const baseUrl = axios.create({ baseUrl: 'http://localhost:5000/'});

const fetchServices = () => baseUrl.get('/services/');

export { fetchServices };