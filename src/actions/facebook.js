import { client } from '../index'

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
const requestToken = () => ({
    type: REQUEST_TOKEN,
    token: null
})

export const RECIEVE_TOKEN = 'RECIEVE_TOKEN';
const recieveToken = token => ({
    type: RECIEVE_TOKEN,
    token: token
})

export const fetchToken = () => dispatch => {
    dispatch(requestToken)

    return client.fetch('*[_type == "settings"][0]{facebookAPI}')
        .then(res => {
            const {appId, appIdDev, appSecret, appSecretDev} = res.facebookAPI
            const app_id = process.env.NODE_ENV === 'development' ? appIdDev : appId
            const app_secret = process.env.NODE_ENV === 'development' ? appSecretDev : appSecret

            return fetch(`https://graph.facebook.com/oauth/access_token?client_id=${app_id}&client_secret=${app_secret}&grant_type=client_credentials`)
            .then(res => res.json())    
            .then(token => {
                return dispatch(recieveToken(token.access_token))
            })
        })
}

export const REQUEST_POSTS = 'REQUEST_POSTS';
const requestPosts = () => ({
    type: REQUEST_POSTS,
    posts: []
})

export const RECIEVE_POSTS = 'RECIEVE_POSTS';
const recievePosts = posts => ({
    type: RECIEVE_POSTS,
    posts: posts
})

export const fetchPosts = (token) => dispatch => {
    dispatch(requestPosts)

    return fetch(`https://graph.facebook.com/v3.2/151868258198492/posts?fields=type,caption,full_picture,link,message,message_tags,permalink_url,story&limit=12&access_token=${token}`)
        .then(res => {
            if (!res.ok) throw Error(res.statusText);
            return res.json()
        })    
        .then(posts => {
            return dispatch(recievePosts(posts))
        })
        .catch(error => console.error(error))
}

export const REQUEST_EVENTS = 'REQUEST_EVENTS';
const requestEvents = () => ({
    type: REQUEST_EVENTS,
    events: []
})

export const RECIEVE_EVENTS = 'RECIEVE_EVENTS';
const recieveEvents = events => ({
    type: RECIEVE_EVENTS,
    events: events
})

export const fetchEvents = (token) => dispatch => {
    dispatch(requestEvents)

    return fetch(`https://graph.facebook.com/v3.2/151868258198492/events?limit=6&access_token=${token}`)
        .then(res => {
            if (!res.ok) throw Error(res.statusText);
            return res.json()
        })    
        .then(events => {
            return dispatch(recieveEvents(events))
        })
        .catch(error => console.error(error))
}