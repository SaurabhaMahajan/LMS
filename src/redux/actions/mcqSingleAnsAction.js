import axios from "axios";
import { GET_MCQSINGLE_ANS, GET_MCQQUESTION_ANS, SHOW_ME_THE_ANS__LOADER } from "../../constants";
import {
  GET_MCQSINGLEANS_SUBMIT, MCQSINGLE_ANS_ERROR, MCQSINGLE_ANS_ERROR_RESOLVED, SAVE_ANSWER_ERROR_MESSAGE, MCQ_SHOW_ME_THE_ANS_ERROR,
  MCQ_SHOW_ME_THE_ANS_ERROR_RESOLVED
} from "../../constants";
import quizquestion from "../../components/MCQ/quizquestion.json";
import quizquistionanswer from "../../components/MCQ/questionsave.json";
import Cookies from "js-cookie";
import config from "../../config/index";
const baseUrl = process.env.REACT_APP_MODULE_BASE_URL
const updateUserAnswer = (ansId, questionId, list) => async (dispatch) => {
  list[0].questions.map((que) => {
    if (que.question_id === questionId) {
      que.user_answer = ansId;
    }
  });
  dispatch({
    type: GET_MCQSINGLE_ANS,
    payload: {
      mcqSingleAnsList: list,
    },
  });
  // try {
  //   dispatch({
  //     type: GET_MCQSINGLEANS_SUBMIT,
  //     payload: {
  //       mcqSingleAnsList: data,
  //     },
  //   });
  // }
  // catch (err) {
  //   dispatch({
  //     type: GET_MCQSINGLEANS_SUBMIT,
  //     payload: {
  //       mcqSingleAnsList: "",
  //     },
  //   });
  // }
};

const mcqSingleAns = (quiz_id, data) => async (dispatch) => {
  let user_id = Cookies.get("userid") || null;
  try {
    const res = await axios.get(`${baseUrl}/mm/quiz_details/${quiz_id}/${user_id}`, {
      headers: {
        Authorization: `${config.authKey}`,
      },
    });
    dispatch({
      type: GET_MCQSINGLE_ANS,
      payload: {
        mcqSingleAnsList: res.data,
      },
    });
  } catch (err) {
    dispatch({
      type: GET_MCQSINGLE_ANS,
      payload: {
        mcqSingleAnsList: quizquestion,
      },
    });

    // dispatch({
    //   type: MCQSINGLE_ANS_ERROR,
    //   payload: SAVE_ANSWER_ERROR_MESSAGE,
    // });

    // dispatch({
    //     type: MCQSINGLE_ANS_ERROR,
    //     payload: SAVE_ANSWER_ERROR_MESSAGE,
    //   });
  }
};
//ERRor handling
export const clearMcqSingleAnsError = () => async (dispatch) => {
  dispatch({
    type: MCQSINGLE_ANS_ERROR_RESOLVED,
  });
};

const mcqShowMeTheAns = (quiz_id) => async (dispatch) => {
  let user_id = Cookies.get("userid") || null;
  try {
    const res = await axios.get(`${baseUrl}/mm/quiz_details/${quiz_id}/${user_id}`, {
      headers: {
        Authorization: `${config.authKey}`,
      },
    });

    dispatch({
      type: GET_MCQQUESTION_ANS,
      payload: {
        mcqShowMeTheAns: res.data,
      },
    });
  } catch (err) {
    // dispatch({
    //   type: GET_MCQQUESTION_ANS,
    //   payload: {
    //     mcqShowMeTheAns: quizquestion,
    //   },
    // });
    dispatch({
      type: MCQ_SHOW_ME_THE_ANS_ERROR,
      payload: SAVE_ANSWER_ERROR_MESSAGE,
    });
  }
};
//ERRor handling
export const clearMcqShowMeTheAnsError = () => async (dispatch) => {
  dispatch({
    type: MCQ_SHOW_ME_THE_ANS_ERROR_RESOLVED,
  });
};
//Loader 

export const showMeTheAnsLoader = (flag) => async (dispatch) => {
  dispatch({
    type: SHOW_ME_THE_ANS__LOADER,
    payload: flag
  })
}

const mcqSingleAnsSubmit = (data, index) => async (dispatch) => {
  data.forEach((q) => {
    if (q.questions[index].option_mcq !== null) {
      q.questions[index].isCorrect = q.questions[index].option_mcq.every(
        (x) => x.selected === x.correct_answer
      );
    }
  });
  try {
    dispatch({
      type: GET_MCQSINGLEANS_SUBMIT,
      payload: {
        mcqSingleAnsList: data,
      },
    });
  } catch (err) {
    dispatch({
      type: GET_MCQSINGLEANS_SUBMIT,
      payload: {
        mcqSingleAnsList: "",
      },
    });
  }
};
export { mcqSingleAns, mcqSingleAnsSubmit, updateUserAnswer, mcqShowMeTheAns };
