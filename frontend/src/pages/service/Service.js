import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button
} from '@material-ui/core';

import useStyles from './service.styles';
import { fetchService } from '../../utils/services';
import image from '../../image/defaultImage.jpg';

const Service = () => {
  const [ service, setService ] = useState({});
  const { id } = useParams();
  const styles = useStyles();

  useEffect(() => {
    fetchService(id)
      .then(res => setService({...res.data}))
  }, []);

  return(
    <Container maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img className={styles.img} src={service.image ? service.image : image} />
        </Grid>
        {!service.title ? <div>Loading...</div> :
          <Grid item xs={12} sm={6}>
            <Typography className={styles.title} variant='h2' component='h2'>
              {service.title}
            </Typography>
            <Typography variant='h6' component='h3'>
              {service.description}
            </Typography>
            {service.openHour && service.closeHour &&
              <Typography variant='h6' component='p'>
                Open: {service.openHour}:00-{service.closeHour}:00
              </Typography>
            }
            <Button className={styles.callBtn} component='a' href={`tel:+38${service.phoneNumber}`} variant='contained' color='primary'>
              Call
            </Button>
          </Grid>
        }
      </Grid>
    </Container>
  )
}

export default Service;