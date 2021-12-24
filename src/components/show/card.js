import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Link,
  Divider,
  Grid
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
  <Chip key={ day } label={ day }/>
));

const renderStatus = ({
  status
}) => <StatusChip
  label={ status }
  color={ status === 'Ended' ? 'secondary' : 'primary' }/>;

const ShowCard = ({
  id,
  image,
  component,
  name,
  schedule,
  rating,
  runtime,
  summary,
  status,
  url,
  linkText,
  handleShowClick
}) => (
  <Card
    sx={{ cursor: 'pointer' }}
    onClick={ () => handleShowClick({ showId: id }) }>
    <CardMedia
      image={ image }
      component={ component }
      alt={ name }>

    </CardMedia>
    <CardContent>
      <Grid container spacing={ 1 }>
        <Grid item xs={ 12 }>
          <Typography
            variant={ 'h5' }>
            { name }
          </Typography>
        </Grid>
        <Grid item xs={ 12 }>
          { renderRaiting({ rating }) }
        </Grid>
        <Grid item xs={ 12 }>
          <Typography textAlign={ 'justify' }>
            { summary }
          </Typography>
        </Grid>
        <Grid item xs={ 12 }>
          <Divider />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <Typography>
            Duration: { runtime }
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent={ 'flex-end' }
          item xs={ 12 } sm={ 6 }>
          { schedule.time && (
            <Typography>
              Time: { schedule.time }
            </Typography>
          ) }
        </Grid>
        <Grid item xs={ 12 }>
          <Divider />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <Stack direction="row" spacing={1}>
            { renderDays(schedule) }
          </Stack>
        </Grid>
        <Grid
          container
          justifyContent={ 'flex-end' }
          item xs={ 12 } sm={ 6 }>
          { renderStatus({ status }) }
        </Grid>
        <Grid item xs={ 12 }>
          <Divider />
        </Grid>
        <Grid item xs={ 12 }>
          <Link target='_blank' href={ url }>
            { linkText }
          </Link>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

ShowCard.propTypes = {
  image: PropTypes.string.isRequired,
  component: PropTypes.string,
  name: PropTypes.string.isRequired,
  schedule: PropTypes.object,
  runtime: PropTypes.string,
  linkText: PropTypes.string,
  handleShowClick: PropTypes.func,
  summary: PropTypes.string,
  status: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.number
};

ShowCard.defaultProps = {
  component: 'img',
  linkText: 'Go to Maze site'
};

export default ShowCard;
