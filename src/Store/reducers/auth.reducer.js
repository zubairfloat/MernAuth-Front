import * as types from '../../Types/auth.types';

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: {},
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_UP_REQUEST:
            state = {
            };
            break;
        default:
            return state;
    }
    return state
}

export default authReducer;