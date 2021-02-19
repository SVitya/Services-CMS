import axios from 'axios';

const baseUrl = axios.create({ baseUrl: 'http://localhost:5000/'});

const fetchServices = (loadFrom) => baseUrl.get(`services/?from=${loadFrom}`,);

export { fetchServices };