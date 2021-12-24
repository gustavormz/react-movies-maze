import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@mui/material';

const BaseAppBar = () => (
  <AppBar position='static'>
    <Toolbar>
      <Typography variant={ 'h5' }>
        MovieCatalog
      </Typography>
    </Toolbar>
  </AppBar>
);

export default BaseAppBar;
