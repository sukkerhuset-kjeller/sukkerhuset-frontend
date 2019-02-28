import { client } from '../index'

export const REQUEST_PAGES = 'REQUEST_PAGES';
const requestPages = () => ({
    type: REQUEST_PAGES,
    pages: []
})

export const RECIEVE_PAGES = 'RECIEVE_PAGES';
const recievePages = pages => ({
    type: RECIEVE_PAGES,
    pages: pages
})

export const fetchPages = () => dispatch => {
    dispatch(requestPages)

    return client.fetch('*[_type in ["page", "quiz"]]')
        .then(pages => {
            return dispatch(recievePages(pages))
        })
}