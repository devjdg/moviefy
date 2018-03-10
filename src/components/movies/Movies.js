import React, { Component } from 'react';
import Api from '../api/Api';
import Movie from '../movie/Movie';

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
            <section>
                {this.state.movies.map((movie, key) => {
                    return <Movie key={movie.id} background_image={movie.medium_cover_image} title={movie.title} title_slug={movie.title_slug} rating={movie.rating} summary={movie.summary} />
                })}
            </section>
        );
    }
}

export default Movies;