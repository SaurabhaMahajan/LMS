const initialState = {
	resultAnalysisData: {},
	showSaveAnswerError: false,
	showLDAPError: false,
	toCheckSubmit:false
};

export default function (state = initialState, action) {
	switch (action.type) {
		default:
			return {
				...state,
			};
	}
}
