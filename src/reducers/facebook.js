import { REQUEST_TOKEN, RECIEVE_TOKEN } from '../actions';

const initialState = {
    token: null
}

const facebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case RECIEVE_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}

export default facebookReducer