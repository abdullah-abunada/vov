import {call, put} from 'redux-saga/effects'
import DataActions from '../redux/MyDataRedux'

/**
 * Get Store Branches
 *
 * @param api
 * @returns {IterableIterator<*>}
 */
export function* getMyData(api) {
    try {
        const response = yield call(api.getData)
        if (response.ok) {
            yield put(DataActions.dataSuccess(response.data))
        } else {
            yield put(DataActions.dataFailure(response.data))
        }
    } catch (error) {
        yield put(DataActions.dataFailure(error.message))
    }
}