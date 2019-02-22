import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { builder } from '../index'

import { fetchSettings } from '../actions';

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
        this.props.fetchSettings()
    }

    render() {
        return (
            <>
                { this.props.main && (
                    <Hero style={{
                        backgroundImage: `url(${builder.image(this.props.main.mainImage).url()})`,
                        backgroundPosition: `${this.props.main.mainImage.hotspot.x * 100}% ${this.props.main.mainImage.hotspot.y * 100}%`
                    }}>Test</Hero>
                )}
            </>
        )
    }
}

const mapStateToProps = state => ({
    main: state.pagesReducer.pages.find(page => page.slug.current === '/')
})

const mapDispatchToProps = dispatch => ({
    fetchSettings: () => dispatch(fetchSettings())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)