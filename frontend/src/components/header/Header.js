import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';

import { LOGOUT } from '../../redux/user/user.types';
import useStyles from './header.styles';

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const isSignIn = useSelector(store => store.user.isSignIn);
  const dispatch = useDispatch();
  const styles = useStyles();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth <  360 ? setMobile(true) : setMobile(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const logout = () => {
    dispatch({ type: LOGOUT });
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
          {isSignIn ? (
            <div>
              <Button className={styles.btn} component={Link} to='/new'>{mobile ? 'New' : 'New service'}</Button>
              <Button className={styles.btn} onClick={logout}>Log out</Button>
            </div>
          ) : (
            <Button className={styles.btn} component={Link} to='/auth'>Sign in</Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;