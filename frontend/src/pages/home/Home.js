import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid
} from '@material-ui/core';

import { fetchServices } from '../../utils/services';
import ServiceCard from '../../components/service-card/ServiceCard';

const Home = () => {
  const [services, setServices] = useState([]);
  const [loadFrom, setLoadFrom] = useState(0);

  useEffect(() => {
    if (services.length && loadFrom == 0) {
      return
    }
    fetchServices().then(res => setServices(res.data));
  }, []);

  const handleClick = () => {
    setLoadFrom(loadFrom => loadFrom + 8);
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
        </Grid>
      )}
    </Container>
  )
}

export default Home;