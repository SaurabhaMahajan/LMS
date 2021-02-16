import { GET_MCQQUESTION_ANS, GET_MCQSINGLE_ANS, SHOW_ME_THE_ANS__LOADER } from "../../constants";
import { GET_MCQSINGLEANS_SUBMIT, MCQSINGLE_ANS_ERROR, MCQSINGLE_ANS_ERROR_RESOLVED, MCQ_SHOW_ME_THE_ANS_ERROR,
  MCQ_SHOW_ME_THE_ANS_ERROR_RESOLVED } from "../../constants";

const initialState = {
  isLoading: false,
  showError: false,
  error: null,
  mcqSingleAnsList: [],
  mcqShowMeTheAns: [],
  mcqSingleAnsSubList: [],
  showMcqSingleAnsError:false,
  showMeTheAnsLoader: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MCQSINGLE_ANS:
      return {
        ...state,
        mcqSingleAnsList: action.payload.mcqSingleAnsList,
        showError: false,
        error: null,
        isLoading: false,
      };
    case GET_MCQSINGLEANS_SUBMIT:
      return {
        ...state,
        mcqSingleAnsSubList: action.payload.mcqSingleAnsList,
        showError: false,
        error: null,
        isLoading: false,
      };
    case GET_MCQQUESTION_ANS:
      return {
        mcqShowMeTheAns: action.payload.mcqShowMeTheAns,
        showError: false,
        error: null,
        isLoading: false,
      }
      case MCQSINGLE_ANS_ERROR:
        return {
          ...state,
          mcqSingleAnsErrorMsg: action.payload,
          showMcqSingleAnsError: true,
        };
      case MCQSINGLE_ANS_ERROR_RESOLVED:
        return {
          ...state,
          showMcqSingleAnsError: false,
        };
        case SHOW_ME_THE_ANS__LOADER:
          return {
            ...state, 
            showMeTheAnsLoader: action.payload
          }
        case MCQ_SHOW_ME_THE_ANS_ERROR:
          return {
            ...state,
            mcqShowMeAnsErrorMsg: action.payload,
            mcqShowMeAnsError: true,
          };
        case MCQ_SHOW_ME_THE_ANS_ERROR_RESOLVED:
          return {
            ...state,
            mcqShowMeAnsError: false,
          };
    default:
      return {
        ...state,
      };
  }
}
