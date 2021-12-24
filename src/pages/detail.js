import React, { useEffect, useContext } from 'react';

import BackdropBase from '../components/backdrop';
import ShowDetail from '../components/show/detail';

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

  return (
    <ShowDetail { ...state.showDetails }/>
  );  
};

export default DetailPage;
