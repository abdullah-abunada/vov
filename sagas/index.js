import {takeLatest, takeEvery, all} from 'redux-saga/effects'
import API from '../services/Api'

//Types
import {MyDataTypes} from '../reduxDATA_REQUEST/MyDataRedux'
import {UsersTypes} from '../redux/MyDataRedux'

//Sagas
import {getMyData, register} from './myDataSagas'
import {getMyData} from './testSages'



// API
const api = API.create()

//Connect Types To Sagas
export default function* root() {
    yield all([
        takeLatest(MyDataTypes., getMyData, api),
        takeLatest(MyDataTypes.REG_REQUEST, register, api),
    ])
}