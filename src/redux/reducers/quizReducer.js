import {
  STEP_CHANGE,
  SET_QUIZ_DATA,
  QUIZ_ERROR_RESOLVED,
  MCQ_LOADER
} from "../../constants";

const initialState = {
  isLoading: true,
  currentStep: "quiz-list",
  quizData: {
    totalQuestions: 0,
    time: 30,
    questions: [],
    score: 100,
  },
  showError: false,
  error: null,
  mcqLoaderFlag: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_QUIZ_DATA:
      return {
        ...state,
        quizData: {
          ...state.quizData,
          totalQuestions: action.payload.questionCount,
          time: action.payload.time,
          questions: action.payload.questions,
        },
        showError: false,
        error: null,
        isLoading: false,
      };
    case STEP_CHANGE:
      return {
        ...state,
        currentStep: action.payload.stepName,
        showError: false,
        error: null,
        isLoading: false,
      };
    case QUIZ_ERROR_RESOLVED:
      return {
        ...state,
        showError: false,
        error: null,
        isLoading: false,
      };
    case MCQ_LOADER:
      return {
        ...state,
        mcqLoaderFlag: action.payload
      };

    default:
      return {
        ...state,
      };
  }
}
