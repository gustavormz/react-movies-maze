import React from 'react';
import PropTypes from 'prop-types';
import { Star } from '@mui/icons-material';
import {
  Grid,
  Typography,
  Container,
  Paper,
  Chip,
  Link,
  Tooltip
} from '@mui/material';

import StatusChip from '../statusChip';

const ShowDetail = ({
  name,
  premiered,
  runtime,
  rating,
  image,
  summary,
  genres,
  status,
  officialSite,
  url
}) => {

  return (
    <Container
      sx={{ paddingTop: '24px' }}
      maxWidth='md'>
      <Paper sx={{ padding: '12px' }} variant='outlined'>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Typography variant={ 'h4' }>
              { name }
            </Typography>
            <Typography>
              { premiered } * { runtime }
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent={ 'flex-end' }
            item sm={6} xs={12}>
            <Typography>
              { rating } / 10
            </Typography>
            <Star />
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: '12px', marginTop: '14px' }} variant='outlined'>
        <Grid container spacing={ 1 }>
          <Grid item sm={5} xs={12}>
            <img alt={ name } src={ image } width={ '100%' }/>
          </Grid>
          <Grid
            container
            alignItems={ 'center' }
            item sm={7} xs={12}>
            <Typography textAlign={ 'justify' }>
              { summary }
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: '12px', marginTop: '14px' }} variant='outlined'>
        <Grid container>
          <Grid item xs={6}>
            { genres && genres.map((g, index) => (
              <Tooltip title={ 'Genre' } key={ index }>
                <Chip color={ 'primary' } sx={{ marginRight: '8px', marginBottom: '8px', marginTop: '8px' }} label={ g }/>
              </Tooltip>
            )) }
          </Grid>
          <Grid
            container
            justifyContent={ 'flex-end' }
            item xs={6}>
              <Tooltip title={ 'Status' }>
                <StatusChip color={ 'secondary' } sx={{ marginBottom: '8px', marginTop: '8px' }} label={status}/>
              </Tooltip>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: '12px', marginTop: '14px' }} variant='outlined'>
        <Grid container>
          <Grid
            container
            justifyContent={ 'space-around' }
            item xs={12}>
            <Tooltip title={ officialSite }>
              <Link href={ officialSite } target='_blank'>
                Official Site
              </Link>
            </Tooltip>
            <Tooltip title={ url }>
              <Link href={ url } target='_blank'>
                Maze Site
              </Link>
            </Tooltip>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

ShowDetail.propTypes = {
  name: PropTypes.string,
  premiered: PropTypes.string,
  runtime: PropTypes.string,
  rating: PropTypes.string,
  image: PropTypes.string,
  summary: PropTypes.string,
  genres: PropTypes.string,
  status: PropTypes.string,
  officialSite: PropTypes.string,
  url: PropTypes.string
};

export default ShowDetail;
