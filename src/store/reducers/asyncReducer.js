import { DUMMY_FETCH } from '../actions/asyncActions';

const initialState = {
  data: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DUMMY_FETCH:
      return { ...state, ...payload };

    default:
      return state;
  }
};
