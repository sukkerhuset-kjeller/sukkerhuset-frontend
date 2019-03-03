import { 
    REQUEST_TOKEN, 
    RECIEVE_TOKEN, 
    REQUEST_POSTS, 
    RECIEVE_POSTS, 
    REQUEST_EVENTS, 
    RECIEVE_EVENTS 
} from '../actions';

const initialState = {
    token: null,
    posts: [],
    events: []
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
        case REQUEST_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case RECIEVE_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case REQUEST_EVENTS:
            return {
                ...state,
                events: action.events
            }
        case RECIEVE_EVENTS:
            return {
                ...state,
                events: action.events
            }
        default:
            return state
    }
}

export default facebookReducer