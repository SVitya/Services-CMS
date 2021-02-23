import axios from 'axios';

const server = axios.create({ server: 'http://localhost:5000'});

server.interceptors.request.use(req => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
})

const fetchServices = (loadFrom, itemsInBatch) => server.get(`/services/?from=${loadFrom}&n=${itemsInBatch}`);
const fetchService = (serviceId) => server.get(`/services/${serviceId}`);
const newService = (serviceData) => server.post('/services/', serviceData);

export { fetchServices, fetchService, newService };