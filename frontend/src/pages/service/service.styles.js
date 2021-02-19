import { makeStyles, theme } from '@material-ui/core';

export default makeStyles((theme) => ({
  img: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },
  title: {
    fontWeight: '400',
  },
  callBtn: {
    marginTop: theme.spacing(2),
  }
}));