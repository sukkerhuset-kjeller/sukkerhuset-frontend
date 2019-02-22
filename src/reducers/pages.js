import { REQUEST_PAGES, RECIEVE_PAGES } from '../actions';

const initialState = {
    pages: []
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PAGES:
            return {
                ...state,
                pages: action.pages
            }
        case RECIEVE_PAGES:
            return {
                ...state,
                pages: action.pages
            }
        default:
            return state
    }
}

export default pageReducer