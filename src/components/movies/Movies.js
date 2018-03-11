import React, { Component } from 'react';
import Api from '../api/Api';
import Movie from '../movie/Movie';
import { Container, Row } from 'reactstrap';
import styled from 'styled-components';
var Spinner = require('react-spinkit');

class Movies extends Component {
    constructor() {
        super();
        this.tag = "Movies";
        this.state = {
            movies: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch(Api.getMovies())
            .then(results => {
                if (!results) throw Error('Server error, please try again');
                return results.json();
            }).then(response => {
                this.setState({
                    movies: response.data.movies,
                });

                // Flag indicator to stop animating
                this.setState({
                    loading: false
                })
            });
    }

    render() {
        if (this.state.loading) {
            return <Loader loaded={!this.state.loaded}><Spinner style={SpinnerStyle} name="line-scale-pulse-out" /></Loader>
        }
        return (
            <Container>
                <Row className="flex-grid">
                    {this.state.movies.map((movie, key) => {
                        return <Movie key={movie.id} movie={movie} />
                    })}
                </Row>
            </Container>
        );
    }
}

const Loader = styled.div`
    position:fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
`

const SpinnerStyle = {
    position: "relative",
    top: "50%",
}


export default Movies;