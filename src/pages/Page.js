import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import BlockContent from '@sanity/block-content-to-react'

import ContentArea from '../modules/ContentArea'
import Table from '../modules/Table'

class Page extends React.Component {
    componentDidMount() {
        
    }

    render() {
        return (
            <ContentArea>
                {this.props.page && (
                    <>
                    <h1>{this.props.page.title}</h1>
                    {this.props.page.body && <BlockContent blocks={this.props.page.body} /> }
                    {this.props.page.table && <Table table={this.props.page.table} /> }
                    </>
                )}
            </ContentArea>
        )
    }
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