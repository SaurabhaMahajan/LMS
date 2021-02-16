import {
  STEP_CHANGE,
  GET_QUIZ_DATA,
  QUIZ_ERROR_RESOLVED,
  MCQ_LOADER
} from "../../constants";

const getQuizData = () => async (dispatch) => {
  dispatch({
    type: GET_QUIZ_DATA,
  });
};

const clearError = () => async (dispatch) => {
  dispatch({
    type: QUIZ_ERROR_RESOLVED,
  });
};

const changeStep = (data) => async (dispatch) => {
  dispatch({
    type: STEP_CHANGE,
    payload: {
      stepName: data,
    },
  });
};

const mcqLoader = (flag) => async dispatch => {
  dispatch({
    type: MCQ_LOADER,
    payload: flag
  })
}

export { getQuizData, clearError, changeStep,mcqLoader };
