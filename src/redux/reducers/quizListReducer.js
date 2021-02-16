import {
  GET_QUIZ_LIST,
  SET_SELECTED_QUIZ_DATA,
  SET_CURRENT_QUE_INDEX,
  SET_CURRENT_QUE_SCORE,
  QUIZLIST_ERROR,
  QUIZLIST_ERROR_RESOLVED,
  QUIZLIST_LOADER,
} from "../../constants";

const initialState = {
  isLoading: true,
  showError: false,
  error: null,
  quizList: [],
  selectedQuizId: null,
  selectedQuizName: null,
  currentQueIndex: 0,
  showQuizListError: false,
  quizListLoading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUIZ_LIST:
      return {
        ...state,
        quizList: action.payload.quizList,
        showError: false,
        error: null,
        isLoading: false,
      };
    case SET_SELECTED_QUIZ_DATA:
      return {
        ...state,
        selectedQuizId: action.payload.selectedQuizId,
        selectedQuizName: action.payload.selectedQuizName,
      };
    case SET_CURRENT_QUE_INDEX:
      return {
        ...state,
        currentQueIndex: action.payload.currentQueIndex,
      };
    case SET_CURRENT_QUE_SCORE:
      return {
        ...state,
        currentQuizScore: action.payload,
      };
    case QUIZLIST_LOADER:
      return{
        ...state,
        quizListLoading: action.payload
      }
    case QUIZLIST_ERROR:
      return {
        ...state,
        quizListErrorMsg: action.payload,
        showQuizListError: true,
      };
    case QUIZLIST_ERROR_RESOLVED:
      return {
        ...state,
        showQuizListError: false,
      };
    default:
      return {
        ...state,
      };
  }
}
