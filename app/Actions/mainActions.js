import * as actionType from '../ActionTypes/actionTypes';
import StoreService from '../../app/Services/store.service'

export function getData() {
	return function (dispatch) {
		StoreService.getData()
			.then(data => dispatch({
				type: actionType.LOAD_ITEMS,
				phones: data
			}))
	}
}