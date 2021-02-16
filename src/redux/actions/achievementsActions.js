import axios from "axios";
import {
  SET_ACHIEVEMENTS_DATA,
  SET_ACHIEVEMENTS_RANKS_DATA,
  GET_ACHIEVEMENTS_DATA_ERROR,
  GET_ACHIEVEMENTS_DATA_ERROR_RESOLVED,
  GET_ACHIEVEMENTS_DATA_ERROR_MESSAGE
} from "../../constants";
import Cookies from "js-cookie";
import config from "../../config/index";
const baseUrl = process.env.REACT_APP_MODULE_BASE_URL

const getAchievementsData = (data) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${baseUrl}/mm/achievements/${Cookies.get("userid")}/${data.level}`,
      {
        headers: {
          "X-Auth-Group-Type": Cookies.get("mySPHUserType"),
          UserId: Cookies.get("userid"),
          Authorization: `${config.authKey}`,
        },
      }
    );
    dispatch({
      type: SET_ACHIEVEMENTS_DATA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ACHIEVEMENTS_DATA_ERROR,
      payload: GET_ACHIEVEMENTS_DATA_ERROR_MESSAGE
    })
  }
};

const getAchievementsRanksData = (data) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${baseUrl}/mm/achievements_ranks/${Cookies.get("userid")}/${data.level}`,
      {
        headers: {
          "X-Auth-Group-Type": Cookies.get("mySPHUserType"),
          UserId: Cookies.get("userid"),
          Authorization: `${config.authKey}`,
        },
      }
    );
    dispatch({
      type: SET_ACHIEVEMENTS_RANKS_DATA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ACHIEVEMENTS_DATA_ERROR,
      payload: GET_ACHIEVEMENTS_DATA_ERROR_MESSAGE
    })
  }
};

const clearAchievementsError = () => async dispatch => {
  dispatch({
    type: GET_ACHIEVEMENTS_DATA_ERROR_RESOLVED
  })
}

export { getAchievementsData, getAchievementsRanksData, clearAchievementsError };
