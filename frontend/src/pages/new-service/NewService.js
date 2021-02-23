import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import Input from '../../components/input/Input';
import OpenHours from '../../components/open-hours/OpenHours';
import { createService } from '../../redux/services/services.actions';
import useStyles from './new-service.styles';

const NewService = () => {
  const [serviceData, setServiceData] = useState({
    title: '',
    description: '',
    image: '',
    openHour: '',
    closeHour: '',
    phoneNumber: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, description, openHour, closeHour, phoneNumber } = serviceData;
    if (title == '' || description == '' || openHour == '' || closeHour == '' || phoneNumber == '') {
      alert('Required fields are not filled');
      return
    }

    dispatch(createService(serviceData));
    history.push('/');
  }

  const handleChange = (e) => {
    setServiceData({...serviceData, [e.target.name]: e.target.value });
  }

  const handleFileInput = (e) => {
    let file = e.target.files[0];
    if (file.size > 1000000) return alert('Image size is to big. Max size - 1mb');
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
      setServiceData({...serviceData, image: reader.result });
    }
  }

  return (
    <Container maxWidth='lg'>
      <Paper className={styles.paper} elevation={24}>
        <form className={`${styles.root} ${styles.form}`} autoComplete='off' noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h6'>
                Create new service
              </Typography>
            </Grid>
            <Input name='title' label='Title' value={serviceData.title} onChange={handleChange} autoFocus />
            <Input name='description' label='Description' value={serviceData.description} onChange={handleChange} multiline />
            <Grid item xs={12}>
              <label htmlFor='image'>
                <input
                  type='file'
                  accept='.png, .jpg, .jpeg'
                  name='image'
                  id='image'
                  style={{ display: 'none' }}
                  onChange={handleFileInput}
                />
                <Button component='span' startIcon={<AddPhotoAlternateIcon />} variant='contained' color='primary' fullWidth>
                  {serviceData.image == '' ? 'Upload cover image (max 1mb)' : 'Uploaded'}
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              <OpenHours serviceData={serviceData} handleChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <Input  name='phoneNumber' label='Phone number' value={serviceData.phoneNumber} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' color='primary' fullWidth >
                Create new service
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default NewService;