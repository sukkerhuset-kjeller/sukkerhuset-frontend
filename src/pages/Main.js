import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { builder } from '../index'

import { fetchToken } from '../actions';

const Hero = styled.div`
    background-size: cover;
    background-position: center center;
    min-height: 400px;
    margin-top: -2rem;
    margin-bottom: 2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`;

class Main extends React.Component {
    componentDidMount() {
        this.props.fetchToken()
    }

    render() {
        return (
            <>
                { this.props.settings && this.props.settings.frontpageImage && (
                    <Hero style={{
                        backgroundImage: `url(${builder.image(this.props.settings.frontpageImage).url()})`,
                        backgroundPosition: `${this.props.settings.frontpageImage.hotspot.x * 100}% ${this.props.settings.frontpageImage.hotspot.y * 100}%`
                    }}>Test</Hero>
                )}
            </>
        )
    }
}

const mapStateToProps = state => ({
    settings: state.settingsReducer.settings,
    facebook: state.facebookReducer
})

const mapDispatchToProps = dispatch => ({
    fetchToken: () => dispatch(fetchToken())
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Main))