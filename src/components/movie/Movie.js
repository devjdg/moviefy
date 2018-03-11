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
            <article class="box-item" itemscope="itemscope">
                <div class="box-body">
                    <div class="cover">
                        <a href="">
                            <img src={this.props.movie.medium_cover_image} data-url="#" class="preload"/>
                        </a>
                    </div>
                    <div class="box-info">
                        <meta itemprop="datePublished" content={this.props.movie.year} />
                        <time itemprop="datePublished" datetime={this.props.movie.year} class="date">
                            {this.props.movie.year}
                        </time>
                        <a class="post-link" href="">
                            <h5 class="post-title" itemprop="name">
                                {this.props.movie.title}
                            </h5>
                        </a>
                        <a class="post-link" href="">
                            <p class="description">{this.truncate(this.props.movie.summary)}</p>
                        </a>
                        <div class="tags">
                        {this.props.movie.torrents.map(torrent => {
                            return <a href={torrent.url}>{torrent.quality}</a>
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
