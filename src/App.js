import React, {
  useEffect,
  useContext
} from 'react';

import { showApi } from './lib/api';
import { StoreContext } from './store';
import { setShows } from './action/show';

import AppBar from './components/appBar';
import Container from './components/container';
import ListPage from './pages/list';
import DetailPage from './pages/detail';
import DetailDialog from './components/detailDialog';
import BackdropBase from './components/backdrop';

const App = () => {
  const [state, dispatch] = useContext(StoreContext);

  useEffect(() => {
    const getAllShows = async () => {
      const { isError, data } = await showApi.getAllShows();
      dispatch(setShows({ shows: !isError ? data : [] }));
    };

    getAllShows();
  }, []);

  return (
    <Container>
      <>
        { (!state.shows || state.shows.length === 0) && (
          <BackdropBase />
        ) }
        <AppBar />
        <ListPage />
        <DetailDialog>
          <DetailPage />
        </DetailDialog>
      </>
    </Container>
  );
}

export default App;
