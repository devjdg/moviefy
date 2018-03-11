import React, { Component } from 'react'
import { Container, Row } from 'reactstrap';

class SearchBar extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Row className="flex-grid">
                    <header class="bar-header">
                        <h1 class="logo">
                            <a href="#">Moviefy</a>
                        </h1>
                    </header >

                    <div id="mask" class="overlay"></div>
                </Row>
            </Container>
        );
    }
}

export default SearchBar;
