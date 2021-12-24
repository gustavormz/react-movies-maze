import { SET_SHOWS, GET_SHOWS_BY_PAGINATION, SET_PAGINATION } from '../actionStatement/show';

const setShows = ({ shows }) => ({
  type: SET_SHOWS,
  payload: { shows }
});

const getShowsByPagination = ({
  page,
  size = 10
}) => ({
  type: GET_SHOWS_BY_PAGINATION,
  payload: { page, size }
});

const setPagination = ({
  page
}) => ({
  type: SET_PAGINATION,
  payload: { page }
});

export {
  setShows,
  getShowsByPagination,
  setPagination
};
