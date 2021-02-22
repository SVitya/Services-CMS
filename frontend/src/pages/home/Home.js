import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Grid,
  Button
} from '@material-ui/core';

import { getServices } from '../../redux/services/services.actions';
import ServiceCard from '../../components/service-card/ServiceCard';

const Home = () => {
  const dispatch = useDispatch();
  const { loadedServices, servicesAmount } = useSelector(state => state.services);
  const [loadFrom, setLoadFrom] = useState(loadedServices.length);
  const itemsInBatch = 8;

  useEffect(() => {
    if (loadFrom == servicesAmount) return;
    dispatch(getServices(loadFrom, itemsInBatch));
  }, [loadFrom, dispatch]);

  const handleClick = () => {
    setLoadFrom(loadFrom => loadFrom + itemsInBatch);
  }

  return (
    <Container maxWidth='lg'>
      {!loadedServices.length  ? <div>Loading...</div> : (
        <Grid container spacing={3}>
          {loadedServices.map(service => (
            <Grid key={service._id} item xs={12} sm={6} lg={3}>
              <ServiceCard service={service} />
            </Grid>
          ))}
          {loadFrom + itemsInBatch < servicesAmount &&
            <Grid container spacing={3} justify="center">
              <Grid item item xs={12} sm={2}>
                <Button onClick={handleClick} variant="contained" color="primary" fullWidth>
                  Load more
                </Button>
              </Grid>
            </Grid>
          }
        </Grid>
      )}
    </Container>
  )
}

export default Home;