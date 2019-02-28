export const REQUEST_QUIZ = 'REQUEST_QUIZ';
const requestQuiz = () => ({
    type: REQUEST_QUIZ,
    quiz: {}
})

export const RECIEVE_QUIZ = 'RECIEVE_QUIZ';
const recieveQuiz = quiz => ({
    type: RECIEVE_QUIZ,
    quiz: quiz
})

export const fetchQuiz = (sheetId, sheetName) => dispatch => {
    dispatch(requestQuiz)
    // TODO: Change API-key from personal to Sukkerhuset
    return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=AIzaSyCq3l8AovM2DOUALj8MfKiu2z_BZrx7Tko`,
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(data => data.json())
        .then(json => {
            const { values } = json
            const rows = values.map(row => ({cells: row.slice(0, 3)}))
            return ({table: {rows}})
        })
        .then(quiz => {
            return dispatch(recieveQuiz(quiz))
        })
}