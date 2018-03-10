import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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
            <MuiThemeProvider>
                <Card>
                    <CardMedia
                        overlay={<CardTitle title={this.props.title} subtitle="English" />}>
                        <img src={this.props.background_image} alt="" />
                    </CardMedia>
                    <CardTitle title={this.props.title_long} subtitle="English" />
                    <CardText>
                        {this.props.summary}
                    </CardText>
                    <CardActions>
                        <FlatButton label="Download 720p" />
                        <FlatButton label="Download 1080p" />
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        );
    }
}

export default Movie;
