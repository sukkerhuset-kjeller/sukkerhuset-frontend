import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { fetchQuiz } from '../actions'

import ConetentArea from '../modules/ContentArea'
import Table from '../modules/Table'

class Quiz extends React.Component {
    componentDidMount() {
        if (this.props.page && this.props.page.spreadsheet) {
            const { sheetId, sheetName } = this.props.page.spreadsheet
            this.props.fetchQuiz(sheetId, sheetName)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.page !== this.props.page) {
            const { sheetId, sheetName } = this.props.page.spreadsheet
            this.props.fetchQuiz(sheetId, sheetName)
        }
    }

    render() {
        return (
            <ConetentArea>
                {this.props.page && (
                    <>
                    <h1>{this.props.page.title}</h1>
                    {this.props.quiz && this.props.quiz.table && <Table table={this.props.quiz.table} /> }
                    </>
                )}
            </ConetentArea>
        )
    }
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