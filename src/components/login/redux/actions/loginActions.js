import axios from "axios";
import {
  STORE_USERNAME,
  GET_USER_DETAILS,
  GET_USER_DETAILS_ERROR,
  USER_DETAILS_ERROR_RESOLVED,
} from "../actionTypes";

const baseUrl = process.env.REACT_APP_USERS_BASE_URL;
// const baseUrl = 'http://localhost:8084';

// get user details from ADL
const getUserDetails = (data) => async (dispatch) => {
  try {
    const headers = data;
    const res = await axios.post(
      `${baseUrl}/user/authenticate/details`,
      {},
      { headers: headers }
    );
    dispatch({
      type: GET_USER_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_DETAILS_ERROR,
      payload: err.response.data,
    });
  }
};

const storeUserName = (username) => async dispatch => {
  try {
    debugger
    dispatch({
      type: STORE_USERNAME,
      payload: username
    })

  } catch(err) {

  }
}

const clearError = () => async (dispatch) => {
  dispatch({
    type: USER_DETAILS_ERROR_RESOLVED,
  });
};

export {
  storeUserName,
  getUserDetails,
  clearError
};
