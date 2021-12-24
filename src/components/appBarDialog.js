import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import {
  Close as CloseIcon
} from '@mui/icons-material';
import PropTypes from 'prop-types';

const AppBarDialog = ({
  handleClose
}) => (
  <AppBar sx={{ position: 'relative' }}>
    <Toolbar>
      <IconButton
        edge='end'
        onClick={ handleClose }>
        <CloseIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

AppBarDialog.propTypes = {
  handleClose: PropTypes.func.isRequired
};

export default AppBarDialog;
