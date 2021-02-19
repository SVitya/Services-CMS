import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button
} from '@material-ui/core';

import Input from '../../components/input/Input';
import useStyles from './auth.styles';

const Auth = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const isSignUp = false;
  const styles = useStyles();

  const handleSubmit = () => {
    console.log('Form submited')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={styles.paper}>
        <Typography className={styles.text} variant='h5'>
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input name='firstName' label='First name' type='text' value={formData.firstName} onChange={handleChange} autoFocus small />
                <Input name='lastName' label='Last name' type='text' value={formData.lastName} onChange={handleChange} small />
              </>
            )}
            <Input name='email' label='Email' type='email' value={formData.email} onChange={handleChange} autoFocus={!isSignUp} />
            <Input name='password' label='Password' type='password' value={formData.password} onChange={handleChange} />
            {isSignUp &&
              <Input name='confirmPassword' label='Repeat Password' type='password' value={formData.confirmPassword} onChange={handleChange} />
            }
            <Grid item xs={12}>
              <Button variant='contained' color='primary' fullWidth>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;