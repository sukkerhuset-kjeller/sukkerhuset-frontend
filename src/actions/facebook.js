
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
    const app_id = process.env.NODE_ENV === 'development' ? '359189941107419' : '268046596888421'
    const app_secret = process.env.NODE_ENV === 'development' ? 'f5c127c289b2b365ae3ec406758cb6b3' : '580aac2786a82de5a1aae5c9c2ca573a';

    return fetch(`https://graph.facebook.com/oauth/access_token?client_id=${app_id}&client_secret=${app_secret}&grant_type=client_credentials`)
        .then(res => res.json())    
        .then(token => {
            return dispatch(recieveToken(token))
        })
}