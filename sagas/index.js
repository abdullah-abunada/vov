import {takeLatest, takeEvery, all} from 'redux-saga/effects'
import API from '../services/Api'

//Types
import {CategoryTypes} from '../redux/CategoryRedux'

//Sagas
import {getCategorise} from './CategorySagas'


// API
const api = API.create()

//Connect Types To Sagas
export default function* root() {
    yield all([
        takeLatest(CategoryTypes.CATEGORY_REQUEST, getCategorise, api),
    ])
}
