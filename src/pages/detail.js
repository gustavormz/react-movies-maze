import React, { useEffect, useContext } from 'react';
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

import StatusChip from '../components/statusChip';
import BackdropBase from '../components/backdrop';

import { StoreContext } from '../store/index';
import { setShowDetails } from '../action/show';

import { showApi } from '../lib/api';

const DetailPage = () => {
  const [state, dispatch] = useContext(StoreContext);

  useEffect(() => {
    const getShowById = async () => {
      const { data, isError } = await showApi.getShowById({ id: state.showDetails.id });
      if (!isError) {
        delete data.id;
        dispatch(setShowDetails({ showDetails: data }));
      }
    };
    getShowById();
  }, [state.showDetails.id]);

  if (!state.showDetails.image) {
    return (
      <BackdropBase />
    );
  }

  const {
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
  } = state.showDetails;

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

export default DetailPage;
