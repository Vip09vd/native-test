import * as actionTypes from '../ActionTypes/actionTypes';

const initialState = {
	phones: []
};

export default function mainReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.LOAD_ITEMS:
			return {
				...state,
				phones: action.phones
			};
		default:
			return state;
	}
}