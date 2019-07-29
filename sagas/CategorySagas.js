import {call, put} from 'redux-saga/effects'
import CategoryActions from '../redux/CategoryRedux'

/**
 * Get Store Branches
 *
 * @param api
 * @returns {IterableIterator<*>}
 */
export function* getCategorise(api) {
    try {
        const response = yield call(api.getCategorise)
        if (response.ok) {
            yield put(CategoryActions.categorySuccess(response.data.response))
        } else {
            yield put(CategoryActions.categoryFailure(response.data))
        }
    } catch (error) {
        yield put(CategoryActions.categoryFailure(error.message))
    }
}

