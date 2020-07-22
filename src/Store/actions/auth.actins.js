import * as types from '../../Types/auth.types';
import signup from '../../Components/signup';

export function Signup(user) {
    console.log("my user is Action ", user)
    return {
        type: types.SIGN_UP_REQUEST,
        payload: user
    };
}