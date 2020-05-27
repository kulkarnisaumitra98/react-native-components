import axios from 'axios';

export const DUMMY_FETCH = 'DUMMY_FETCH';

export const fetchDummyData = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
    dispatch({ type: DUMMY_FETCH, payload: { data: data.data.slice(0, 2) } });
  } catch (err) {
    console.log(err);
  }
};
