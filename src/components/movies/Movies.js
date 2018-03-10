import React, { Component } from 'react';
import Api from '../api/Api';
import Movie from '../movie/Movie';
import { Container, Row } from 'reactstrap';

class Movies extends Component {
    constructor() {
        super();
        this.tag = "Movies";
        this.state = {
            movies: []
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
                console.log(this.tag, this.state.movies)
            });
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.movies.map((movie, key) => {
                        return <Movie key={movie.id} movie={movie} />
                    })}
                </Row>
            </Container>
        );
    }
}

export default Movies;