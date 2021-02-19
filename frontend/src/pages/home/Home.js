import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Button
} from '@material-ui/core';

import { fetchServices } from '../../utils/services';
import ServiceCard from '../../components/service-card/ServiceCard';

const Home = () => {
  const [services, setServices] = useState([]);
  const [loadFrom, setLoadFrom] = useState(0);

  useEffect(() => {
    loadBatchOfServices(loadFrom);
  }, []);

  const handleClick = () => {
    loadBatchOfServices(loadFrom);
  }

  const loadBatchOfServices = (loadFrom) => {
    fetchServices(loadFrom)
      .then(res => setServices((prevServices) => [...prevServices, ...res.data]))
      .then(() => setLoadFrom(loadFrom => loadFrom + 8))
      .catch(err => console.log(err.message))
  }

  return (
    <Container maxWidth='lg'>
      {!services.length ? <div>Loading...</div> : (
        <Grid container spacing={3}>
          {services.map(service => (
            <Grid key={service._id} item xs={12} sm={6} lg={3}>
              <ServiceCard service={service} />
            </Grid>
          ))}
          <Grid container spacing={3} justify="center">
            <Grid item item xs={12} sm={2}>
              <Button onClick={handleClick} variant="contained" color="primary" fullWidth>
                Load more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  )
}

export default Home;