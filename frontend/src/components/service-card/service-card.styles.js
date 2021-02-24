import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  card: {
    maxHeight: '300px',
  },
  media: {
    height: '200px',
  },
  content: {
    height: theme.spacing(10),
    paddingTop: theme.spacing(0.5),
  }
}));