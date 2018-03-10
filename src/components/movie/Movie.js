import React, { Component } from 'react';
import styled from 'styled-components';

class Movie extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // TODO: Optimize movie loading here
    }

    render() {
        return (
            <MovieItem>
                <CoverImage style={{backgroundImage: 'url(' + this.props.background_image + ')'}} />
                <Title>{this.props.title}</Title>
                <p>{this.props.title_slug}</p>
                <p>{this.props.rating}</p>
                <p>{this.props.summary}</p>
            </MovieItem>
        );
    }
}

const MovieItem = styled.div`
    font-size: 1.5em;
    text-align: left;
    color: palevioletred;
`

const CoverImage = styled.img`
    height: 300px;
    width:200px;


`

const Title = styled.h1`

`

export default Movie;
