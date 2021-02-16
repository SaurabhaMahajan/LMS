import axios from "axios";
import {
  SET_RESULT_ANALYSIS_DATA,
  SAVE_RESULT_ERROR_RESOLVED,
  SAVE_RESULT_ERROR,
  SAVE_ANSWER_ERROR_MESSAGE,
  LDAP_ERROR,
  LDAP_ERROR_RESOLVED,
  TO_CHECK_SUBMIT
} from "../../constants";
import Cookies from "js-cookie";
import config from "../../config/index";
import dummyJson from '../../components/ResultAnalysis/dummy.json'
const baseUrl = process.env.REACT_APP_MODULE_BASE_URL
const saveQuestionAnswer = (data, autoSave = false) => async (dispatch) => {
  try {
    if (data.isLastQue) {
      dispatch({
        type: SET_RESULT_ANALYSIS_DATA,
        payload: { isLoading: true },
      });
    }
    const res = await axios.post(
      `${baseUrl}/mm/quiz_results/save/${data.quizId}/${Cookies.get("userid")}/${data.questionId
      }`,
      {
        score: data.score,
        question_max_score: data.questionMaxScore,
        user_level: data.userLevel,
        answer: data.userAnswer,
        question_topic: data.questionTopic,
        is_it_last_question: data.isLastQue,
      },
      {
        headers: {
          "X-Auth-Group-Type": data.userGroupType,
          UserId: Cookies.get("userid"),
          Authorization: `${config.authKey}`
        }
      }
    );

    if (data.isLastQue) {
      dispatch({
        type: SET_RESULT_ANALYSIS_DATA,
        payload: { data: res.data, isLoading: false },
      });
    }
  } catch (err) {
    dispatch({
      type: SAVE_RESULT_ERROR,
      payload: SAVE_ANSWER_ERROR_MESSAGE
    })
    if (data.isLastQue) {
      dispatch({
        type: SET_RESULT_ANALYSIS_DATA,
        payload: { data: dummyJson, isLoading: false },
      });
    }   
  }
};

const clearSaveResultError = () => async dispatch => {
  dispatch({
    type: SAVE_RESULT_ERROR_RESOLVED
  })
}
const toCheckSubmit= (data) => async dispatch =>{
  dispatch({
    type: TO_CHECK_SUBMIT,
    payload: data,
  });
}
/* const setResultAnalysisData = (data) => async (dispatch) => {
  dispatch({
    type: SET_RESULT_ANALYSIS_DATA,
    payload: data,
  });
} */

const invokeLDAP = (registerUser, trySingleSignOnLogin, callback) => async dispatch => {
  try {
    const response = await axios("/ldap/details");
    if (response.data.loginid) {
      // windowDataLayer();
      registerUser(response.data);
      callback(response.data.id);
    } else {
      // registerUser(response);
      trySingleSignOnLogin();
    }
  }
  catch(err) {
    // dispatch({
    //   type: LDAP_ERROR
    // })
  }
};

const clearLDAPError = () => async dispatch => {
  dispatch({
    type: LDAP_ERROR_RESOLVED
  })
}

export { saveQuestionAnswer, clearSaveResultError, invokeLDAP, clearLDAPError, toCheckSubmit };
