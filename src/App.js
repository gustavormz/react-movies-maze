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
      <AppBar />
      <ListPage />
    </Container>
  );
}

export default App;
