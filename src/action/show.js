import {
  SET_SHOWS,
  GET_SHOWS_BY_PAGINATION,
  SET_PAGINATION,
  SET_IS_DIALOG_OPEN,
  SET_SHOW_ID,
  SET_SHOW_DETAILS
} from '../actionStatement/show';

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

const setIsDialogOpen = ({
  isDialogOpen
}) => ({
  type: SET_IS_DIALOG_OPEN,
  payload: { isDialogOpen }
});

const setShowId = ({
  showId
}) => ({
  type: SET_SHOW_ID,
  payload: { showId }
});

const setShowDetails = ({
  showDetails
}) => ({
  type: SET_SHOW_DETAILS,
  payload: { showDetails }
});

export {
  setShows,
  getShowsByPagination,
  setPagination,
  setIsDialogOpen,
  setShowId,
  setShowDetails
};
