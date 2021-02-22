import axios from 'axios';

const baseUrl = axios.create({ baseUrl: 'http://localhost:5000'});

const fetchServices = (loadFrom, itemsInBatch) => baseUrl.get(`/services/?from=${loadFrom}&n=${itemsInBatch}`);
const fetchService = (serviceId) => baseUrl.get(`/services/${serviceId}`);

export { fetchServices, fetchService };