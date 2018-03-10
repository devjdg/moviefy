import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


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
            <Col xs="6" md="3" className="clearfix" style={{ padding: '.5rem' }}>
                <Card>
                    <CardImg width="100%" src={this.props.movie.medium_cover_image} alt={this.props.movie.title} />
                    <CardBody>
                        <CardTitle>{this.truncate(this.props.movie.title, 15)}</CardTitle>
                        <CardSubtitle>{this.props.movie.rating} / 10</CardSubtitle>
                        <CardText>{this.truncate(this.props.movie.summary)}</CardText>
                        {this.props.movie.torrents.map(torrents => {
                            return <Button outline color="primary" style={buttonStyle}>{torrents.quality}</Button>
                        })}
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

const buttonStyle = {
    marginRight: "5px"
}

export default Movie;
