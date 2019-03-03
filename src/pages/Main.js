import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { builder } from '../index'

import { fetchToken, fetchPosts, fetchEvents } from '../actions';

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

const Main = props => {

    useEffect(() => {props.fetchToken()}, [])
    useEffect(() => {
        if (props.facebook.token) {
            props.fetchPosts(props.facebook.token)
            props.fetchEvents(props.facebook.token)
        }
    }, [props.facebook.token])

    return (
        <>
            { props.settings && props.settings.frontpageImage && (
                <Hero style={{
                    backgroundImage: `url(${builder.image(props.settings.frontpageImage).url()})`,
                    backgroundPosition: `${props.settings.frontpageImage.hotspot.x * 100}% ${props.settings.frontpageImage.hotspot.y * 100}%`
                }} />
            )}
        </>
    )
}

const mapStateToProps = state => ({
    settings: state.settingsReducer.settings,
    facebook: state.facebookReducer
})

const mapDispatchToProps = dispatch => ({
    fetchToken: () => dispatch(fetchToken()),
    fetchPosts: (token) => dispatch(fetchPosts(token)),
    fetchEvents: (token) => dispatch(fetchEvents(token))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Main))