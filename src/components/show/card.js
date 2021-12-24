import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Link
} from '@mui/material';
import PropTypes from 'prop-types';

import RaitingIcon from '../raiting';
import Chip from '../dayChip';
import StatusChip from '../statusChip';

const renderRaiting = ({ rating }) => {
  const ratingIcons = [];
  for (let i = 0; i < parseInt(rating); i++) {
    ratingIcons.push(<RaitingIcon key={ i } color='primary'/>);
  };

  for (let i = parseInt(rating); i < 10; i++) {
    ratingIcons.push(<RaitingIcon key={ i } color='secondary'/>);
  };

  return ratingIcons;
};

const renderDays = ({
  days
}) => days.map(day => (
  <Chip label={ day }/>
));

const renderStatus = ({
  status
}) => <StatusChip
  label={ status }
  color={ status === 'Ended' ? 'secondary' : 'primary' }/>;

const ShowCard = ({
  image,
  component,
  name,
  schedule,
  rating,
  runtime,
  summary,
  status,
  url,
  linkText
}) => (
  <Card>
    <CardMedia
      image={ image }
      component={ component }
      alt={ name }>

    </CardMedia>
    <CardContent>
      <Typography>
        { renderStatus({ status }) }
      </Typography>
      <Typography
        variant={ 'h5' }>
        { name }
      </Typography>
      <Typography
        variant={ 'h5' }>
        { renderRaiting({ rating }) }
      </Typography>
      <Typography textAlign={ 'justify' }>
        { summary }
      </Typography>
      <Typography>
        Duration: { runtime }
      </Typography>
      <Typography>
        <Stack direction="row" spacing={1}>
          { renderDays(schedule) }
        </Stack>
      </Typography>
      { schedule.time && (
        <Typography>
          Schedule Time: { schedule.time }
        </Typography>
      ) }
      <Link target='_blank' href={ url }>
        { linkText }
      </Link>
    </CardContent>
  </Card>
);

ShowCard.propTypes = {
  image: PropTypes.string.isRequired,
  component: PropTypes.string,
  name: PropTypes.string.isRequired,
  schedule: PropTypes.object,
  runtime: PropTypes.string,
  linkText: PropTypes.string
};

ShowCard.defaultProps = {
  component: 'img',
  linkText: 'Go to Maze site'
};

export default ShowCard;
