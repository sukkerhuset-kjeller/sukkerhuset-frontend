import { client } from '../index'

export const REQUEST_SETTINGS = 'REQUEST_SETTINGS';
const requestSettings = () => ({
    type: REQUEST_SETTINGS,
    settings: {}
})

export const RECIEVE_SETTINGS = 'RECIEVE_SETTINGS';
const recieveSettings = settings => ({
    type: RECIEVE_SETTINGS,
    settings: settings
})

export const fetchSettings = () => dispatch => {
    dispatch(requestSettings)

    return client.fetch('*[_type == "settings"][0]')
        .then(settings => {
            return dispatch(recieveSettings(settings))
        })
}