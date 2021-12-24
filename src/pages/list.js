import React, { useContext } from 'react';
import {
  Grid,
  Box
} from '@mui/material';

import { StoreContext } from '../store';
import { setPagination, getShowsByPagination } from '../action/show';

import ShowCard from '../components/show/card';
import Pagination from '../components/pagination';

const ListPage = () => {
  const [state, dispatch] = useContext(StoreContext);

  const handlePaginationChange = (event, value) => {
    event.preventDefault();
    dispatch(setPagination({ page: value }));
  };

  return (
    <Box sx={{ paddingTop: '14px', paddingBottom: '24px' }}>
      <Grid container spacing={2}>
        { state.showsToDisplay.map((show, index) => (
          <Grid key={`${show.name}-${index}`} item xs={12} md={3} sm={6}>
            <ShowCard { ...show }/>
          </Grid>
        )) }
        <Grid item xs={12}/>
        <Grid
          container
          alignItems={ 'center' }
          justifyContent={ 'center' }
          item xs={12}>
          <Pagination
            page={ state.pagination.page }
            onChange={ handlePaginationChange }
            count={ state.pagination.count }/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListPage;
