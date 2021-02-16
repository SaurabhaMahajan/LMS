import {
		SET_ACHIEVEMENTS_DATA,
		SET_ACHIEVEMENTS_RANKS_DATA,
		GET_ACHIEVEMENTS_DATA_ERROR,
		GET_ACHIEVEMENTS_DATA_ERROR_RESOLVED
} from '../../constants';

const initialState = {
	achievementsError: false,
	achievementsErrorMessage: null,
	achievementsData: {},
	achievementsRanksData: { user: {} }
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_ACHIEVEMENTS_DATA:
			return {
				...state,
				achievementsData: action.payload
			};

		case SET_ACHIEVEMENTS_RANKS_DATA:
			return {
				...state,
				achievementsRanksData: action.payload
			};
		case GET_ACHIEVEMENTS_DATA_ERROR:
			return {
				...state,
				achievementsError: true,
				achievementsErrorMessage: action.payload
			};
		case GET_ACHIEVEMENTS_DATA_ERROR_RESOLVED:
			return {
				...state,
				achievementsError: false,
				achievementsErrorMessage: null
			};
		default:
			return {
				...state,
			};
	}
}
