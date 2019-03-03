import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { fetchQuiz } from '../actions'

import ConetentArea from '../modules/ContentArea'
import Table from '../modules/Table'

const Quiz = props => {

    useEffect(() => {
        if (props.page && props.page.spreadsheet) {
            const { sheetId, sheetName } = props.page.spreadsheet
            props.fetchQuiz(sheetId, sheetName)
        }
    }, [props.page])

    return (
        <ConetentArea>
            {props.page && (
                <>
                <h1>{props.page.title}</h1>
                {props.quiz && props.quiz.table && <Table table={props.quiz.table} /> }
                </>
            )}
        </ConetentArea>
    )
}

const mapStateToProps = (state, ownProps) => ({
    page: state.pageReducer.pages.find(page => page.link.slug.current === 'quiz'),
    quiz: state.quizReducer.quiz
})

const mapDispatchToProps = dispatch => ({
    fetchQuiz: (sheetId, sheetName) => dispatch(fetchQuiz(sheetId, sheetName))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Quiz))