import React, { useContext } from 'react';
import {
  Slide,
  Dialog
} from '@mui/material';

import AppBarDialog from './appBarDialog';

import { StoreContext } from '../store/index';
import { setIsDialogOpen } from '../action/show';

const Transition = React.forwardRef((props, ref) => <Slide direction='up' ref={ ref } { ...props } />);

const DetailDialog = ({
  children
}) => {
  const [state, dispatch] = useContext(StoreContext);

  const handleClose = () => {
    dispatch(setIsDialogOpen({ isDialogOpen: false }));
  };

  return (
    <Dialog
      fullScreen
      open={ state.isDialogOpen }
      onClose={ handleClose }
      TransitionComponent={ Transition }>
      <AppBarDialog handleClose={ handleClose } />
      { children }
    </Dialog>
  );
};

export default DetailDialog;
