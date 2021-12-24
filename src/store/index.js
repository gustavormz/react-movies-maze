import React, { createContext, useReducer } from 'react';

import {
  SET_SHOWS,
  GET_SHOWS_BY_PAGINATION,
  SET_PAGINATION
} from '../actionStatement/show';

import utils from '../lib/utils';

export const StoreContext = createContext({});

const initialState = {
  shows: [],
  detailShow: {},
  pagination: {
    total: 0,
    page: 1,
    size: 12,
    count: 0
  },
  showsToDisplay: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SHOWS:
      const shows = action.payload.shows.map(show => utils.formatDataShow({ show }));
      return {
        ...state,
        shows,
        pagination: {
          ...state.pagination,
          total: shows.length,
          count: shows.length / state.pagination.size
        },
        showsToDisplay: shows.slice(0, state.pagination.size)
      };
    case SET_PAGINATION:
      const offset = (action.payload.page - 1) * state.pagination.size;
      const limit = offset + state.pagination.size;
      const showsToDisplay = state.shows.slice(offset, limit);

      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload.page
        },
        showsToDisplay: [...showsToDisplay]
      };
    default:
      throw new Error ('Define action type');
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider
      value={ [state, dispatch] }>
      { children }
    </StoreContext.Provider>
  );
};

export default Store;
