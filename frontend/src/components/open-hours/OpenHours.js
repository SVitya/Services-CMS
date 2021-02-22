import React from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

const OpenHours = ({serviceData, handleChange}) => {

  let menuItems = [];
  for (let i = 0; i < 24; i++) {
    menuItems.push(<MenuItem key={i} value={i}>{i < 10 ? `0${i}` : `${i}`}:00</MenuItem>)
  }
  
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id='open'>Open hour</InputLabel>
          <Select
            name='openHour'
            labelId='open'
            label='Open hour'
            value={serviceData.openHour}
            onChange={handleChange}
            required
          >
            {menuItems}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id='close'>Close hour</InputLabel>
          <Select
            name='closeHour'
            labelId='close'
            label='Close hour'
            value={serviceData.closeHour}
            onChange={handleChange}
            required
          >
            {menuItems}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default OpenHours;