import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Container,
  Toolbar,
  Typography
} from '@material-ui/core';

import useStyles from './header.styles';

const Header = () => {
const styles = useStyles();

  return (
    <AppBar className={styles.root} position='static'>
      <Container>
        <Toolbar>
          <Typography
            component={Link}
            to='/service'
            className={styles.title}
            variant='h6'
          >
            Services CMS
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;
