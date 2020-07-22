import axios from 'axios';

const BASE_URL = "https://nodejs-float.herokuapp.com/user"
// const BASE_URL = "http://localhost:3001/user"

export function callSignUp(action) {
    return axios.post(`${BASE_URL}/signup`, action.payload);
}