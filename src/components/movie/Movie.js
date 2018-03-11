import React, { Component } from 'react';

class Movie extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // TODO: Optimize movie loading here
    }

    // TODO: Make global helper for truncating strings
    truncate = (string, max = 100) => {
        return string.length > max ? string.substring(0, max) : string;
    }

    render() {
        return (
            <article className="box-item">
                <div className="box-body">
                    <div className="cover">
                        <a href="">
                            <img src={this.props.movie.medium_cover_image} data-url="#" className="preload"/>
                        </a>
                    </div>
                    <div className="box-info">
                        <meta content={this.props.movie.year} />
                        <time datetime={this.props.movie.year} className="date">
                            {this.props.movie.year}
                        </time>
                        <a className="post-link" href="">
                            <h5 className="post-title">
                                {this.props.movie.title}
                            </h5>
                        </a>
                        <a className="post-link" href="">
                            <p className="description">{this.truncate(this.props.movie.summary)}</p>
                        </a>
                        <div className="tags">
                        {this.props.movie.torrents.map((torrent, key) => {
                            return <a key={torrent.url} href={torrent.url}><small>{torrent.quality}</small></a>
                        })}
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

const buttonStyle = {
    marginRight: "5px",
    marginTop: "5px"
}

export default Movie;
