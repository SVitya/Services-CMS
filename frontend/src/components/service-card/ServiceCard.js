import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';

import useStyles from './service-card.styles';
import image from '../../image/defaultImage.jpg';

const ServiceCard = ({ service }) => {
  const styles = useStyles();

  return (
    <Card>
      <CardActionArea component={Link} to={`service/${service._id}`}>
        <CardMedia image={service.image ? service.image : image} title={`${service.title} title`} className={styles.media} />
        <CardContent>
          <Typography variant="h5" component="h2">{service.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{service.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ServiceCard;