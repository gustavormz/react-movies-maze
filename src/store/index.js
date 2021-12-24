import React, { createContext, useReducer } from 'react';

import {
  SET_SHOWS,
  SET_PAGINATION,
  SET_SHOW_ID,
  SET_IS_DIALOG_OPEN,
  SET_SHOW_DETAILS
} from '../actionStatement/show';

import utils from '../lib/utils';

export const StoreContext = createContext({});

const initialState = {
  shows: [],
  showDetails: {},
  pagination: {
    total: 0,
    page: 1,
    size: 12,
    count: 0
  },
  showsToDisplay: [],
  isDialogOpen: false
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
    case SET_IS_DIALOG_OPEN:
      return {
        ...state,
        isDialogOpen: action.payload.isDialogOpen
      };
    case SET_SHOW_ID:
      return {
        ...state,
        showDetails: {
          id: action.payload.showId
        },
        isDialogOpen: true
      };
    case SET_SHOW_DETAILS:
      const showDetails = utils.formatDataShow({ show: action.payload.showDetails });
      return {
        ...state,
        showDetails: {
          id: state.showDetails.id,
          ...showDetails
        },
        isDialogOpen: true
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
