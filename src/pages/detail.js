import React, { useContext } from 'react';

import BackdropBase from '../components/backdrop';
import ShowDetail from '../components/show/detail';

import { StoreContext } from '../store/index';

const DetailPage = () => {
  const [state, dispatch] = useContext(StoreContext);

  if (!state.showDetails.image) {
    return (
      <BackdropBase />
    );
  }

  return (
    <ShowDetail { ...state.showDetails }/>
  );  
};

export default DetailPage;
