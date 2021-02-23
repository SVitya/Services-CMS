import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button
} from '@material-ui/core';

import Input from '../../components/input/Input';
import useStyles from './auth.styles';
import { signin, signup } from '../../redux/user/user.actions';

const Auth = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  const switchMode = () => {
    setIsSignUp(prevIsSignUp => !prevIsSignUp);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signin(formData, history));
    } else {
      dispatch(signup(formData, history));
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={styles.paper}>
        <Typography className={styles.text} variant='h5'>
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {!isSignUp && (
              <>
                <Input name='firstName' label='First name' type='text' value={formData.firstName} onChange={handleChange} autoFocus small />
                <Input name='lastName' label='Last name' type='text' value={formData.lastName} onChange={handleChange} small />
              </>
            )}  
            <Input name='email' label='Email' type='email' value={formData.email} onChange={handleChange} autoFocus={!isSignUp} />
            <Input name='password' label='Password' type='password' value={formData.password} onChange={handleChange} />
            {!isSignUp &&
              <Input name='confirmPassword' label='Repeat Password' type='password' value={formData.confirmPassword} onChange={handleChange} />
            }
            <Grid item xs={12}>
              <Button type='submit' variant='contained' color='primary' fullWidth>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </Button>
              <Button onClick={switchMode} fullWidth>
                { isSignUp ? "Don't have an account? Sign Up" : 'Already have an account? Sign in'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;