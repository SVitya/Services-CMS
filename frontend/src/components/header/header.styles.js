import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    textDecoration: 'none'
  },
  btn: {
    color: 'white'
  }
}));