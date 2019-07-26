import {takeLatest, takeEvery, all} from 'redux-saga/effects'
import API from '../services/Api'

//Types
import {MyDataTypes} from '../redux/MyDataRedux'

//Sagas
import {getMyData} from './MyDataSagas'


// API
const api = API.create()

//Connect Types To Sagas
export default function* root() {
    yield all([
        takeLatest(MyDataTypes.DATA_REQUEST, getMyData, api),
    ])
}
