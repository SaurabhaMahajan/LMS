import {
  STORE_USERNAME,
  GET_USER_DETAILS,
  GET_USER_DETAILS_ERROR,
  USER_DETAILS_ERROR_RESOLVED,
} from "../actionTypes";

const initialState = {
  isLoading: true,
  username: null
};
export default function (state = initialState, action) {
  switch (action.type) {
    case STORE_USERNAME: 
      return {
        ...state,
        username: action.payload
      }
    case GET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
        showError: false,
        error: null,
        isLoading: false,
      };

    case GET_USER_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
        showError: true,
        isLoading: false,
      };

    case USER_DETAILS_ERROR_RESOLVED:
      return {
        ...state,
        showError: false,
      };

    default:
      return {
        ...state,
      };
  }
}
