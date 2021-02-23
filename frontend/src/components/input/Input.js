import React from 'react';
import { Grid, TextField } from '@material-ui/core';

const Input = ({ name, label, type, value, onChange, autoFocus, small, multiline }) => {
  return (
    <Grid item xs={12} sm={small ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        multiline={multiline}
        variant='outlined'
        required
        fullWidth
      />
    </Grid>
  )
}

export default Input;