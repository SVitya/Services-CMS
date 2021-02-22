import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';

import useStyles from './header.styles';

const Header = ({ isSignIn, setIsSignIn}) => {
  const styles = useStyles();

  const logout = () => {
    localStorage.clear();
    setIsSignIn(false);
  }

  return (
    <AppBar className={styles.root} position='static'>
      <Container>
        <Toolbar className={styles.toolbar}>
          <Typography
            component={Link}
            to='/'
            className={styles.title}
            variant='h6'
          >
            Services CMS
          </Typography>
          {isSignIn ? <Button className={styles.btn} onClick={logout}>Log out</Button> : (
            <Button className={styles.btn} component={Link} to='/auth'>Sign in</Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;