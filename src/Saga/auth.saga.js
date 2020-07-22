import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../Types/auth.types';
import * as authServices from '../Services/auth.callapi';

function* signUpSaga(action) {
    try {
        const response = yield call(authServices.callSignUp, action)
        console.log("response is ", response)

    } catch (error) {

    }
}

export default function* authWatcher() {
    yield takeLatest(types.SIGN_UP_REQUEST, signUpSaga)
}