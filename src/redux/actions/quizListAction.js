import axios from "axios";
import {
  GET_QUIZ_LIST,
  SET_SELECTED_QUIZ_DATA,
  SET_CURRENT_QUE_INDEX,
  SET_CURRENT_QUE_SCORE,
  QUIZLIST_ERROR,
  QUIZLIST_ERROR_RESOLVED,
  SAVE_ANSWER_ERROR_MESSAGE,
  QUIZLIST_LOADER
} from "../../constants";
import { quizListarray } from "../../components/QuizList/dummy";
import config from "../../config/index";
const baseUrl = process.env.REACT_APP_MODULE_BASE_URL
const getQuizList = (data) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${baseUrl}/mm/quizzes/${data}`,
      {
        headers: {
          Authorization: `${config.authKey}`,
        },
      },
      {}
    );
    dispatch({
      type: GET_QUIZ_LIST,
      payload: {
        quizList: res.data,
      },
    });
  } catch (err) {
    dispatch({
      type: GET_QUIZ_LIST,
      payload: {
        quizList: quizListarray,
      },
    });

    // dispatch({
    //   type: QUIZLIST_ERROR,
    //   payload: SAVE_ANSWER_ERROR_MESSAGE,
    // });
  }
};
//ERRor handling
export const clearQuizListError = () => async (dispatch) => {
  dispatch({
    type: QUIZLIST_ERROR_RESOLVED,
  });
};
//Loader 

export const quizListLoader = (flag) => async (dispatch) => {
  dispatch({
    type: QUIZLIST_LOADER,
    payload: flag
  })
}


const setSelectedQuizData = (data) => async (dispatch) => {
  dispatch({
    type: SET_SELECTED_QUIZ_DATA,
    payload: data,
  });
};

const setCurrentQueIndex = (data) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT_QUE_INDEX,
    payload: data,
  });
};

const setCurrentQuizScore = (score) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT_QUE_SCORE,
    payload: score,
  });
};

export {
  getQuizList,
  setSelectedQuizData,
  setCurrentQueIndex,
  setCurrentQuizScore,
};
