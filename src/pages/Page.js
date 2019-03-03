import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import BlockContent from '@sanity/block-content-to-react'

import ContentArea from '../modules/ContentArea'
import Table from '../modules/Table'

const Page = props => {

    return (
        <ContentArea>
            {props.page && (
                <>
                <h1>{props.page.title}</h1>
                {props.page.body && <BlockContent blocks={props.page.body} /> }
                {props.page.table && <Table table={props.page.table} /> }
                </>
            )}
        </ContentArea>
    )
}

const mapStateToProps = (state, ownProps) => ({
    page: state.pageReducer.pages.find(page => page.link.slug.current === ownProps.match.params.slug)
})

const mapDispatchToProps = dispatch => ({

})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Page))