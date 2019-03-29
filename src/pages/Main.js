import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { builder } from '../index'

import { fetchToken, fetchPosts, fetchEvents } from '../actions';

import ContentArea from '../modules/ContentArea'
import Link from '../modules/Link'
import Post from '../modules/Post'
import Event from '../modules/Event'

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

const FlexContentArea = styled(ContentArea)`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    & > div {
        margin-bottom: 1rem;
        &:first-child {
            width: 60%;
            @media (max-width: 950px) {
                order: 2;
                width: 100%;
            }
            & > div {
                display: flex;
                flex-flow: row wrap;
            }
        }
    }
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
            <FlexContentArea>
                <div>
                    <h1>Dette skjer på sukkerhuset</h1>
                    <div>
                        {props.facebook.posts.length > 0 ?
                            props.facebook.posts.map(post => <Post key={post.id} data={post} />) :
                            'Ingen innlegg tilgjengelig.'
                        }
                    </div>
                    <Link href="https://www.facebook.com/Sukkerhuset" target="_blank">Se mer på facebook</Link>
                </div>
                <div>
                    <h1>Arrangementer</h1>
                    <div>
                        {props.facebook.events.length > 0 ?
                            props.facebook.events.map((event, index) => <Event key={index} data={event} />) :
                            'Ingen arrangementer tilgjengelig.'
                        }
                    </div>
                    <Link href="https://www.facebook.com/Sukkerhuset/events" target="_blank">Se alle arrangementer</Link>
                </div>
            </FlexContentArea>
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
)(React.memo(Main)))