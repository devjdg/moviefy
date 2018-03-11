import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
var FontAwesome = require('react-fontawesome');

class SearchBar extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // TODO: Add initial method calls here for search
    }

    // TODO: Declare methods here for searching

    render() {
        return (
            <Container>
                <Row className="flex-grid">
                    <Header className="bar-header">
                        <Row>
                            <Col xs="8">
                                <Logo className="logo">
                                    <Title href="www.devjdg.com/moviefy">Moviefy <FontAwesome name='play-circle'/></Title>
                                    <Contribute href="www.github.com/devjdg/moviefy" className="contribute"> // [Fork <FontAwesome name='github'/>]</Contribute>
                                    <Contribute href="www.github.com/devjdg/moviefy" className="contribute"> [Contribute <FontAwesome name='github'/>]</Contribute>
                                </Logo>
                            </Col>
                            <Col xs="4">
                                <Search className="search" href="#"><FontAwesome name='search'/></Search>
                            </Col>
                        </Row>
                    </Header >
                </Row>
            </Container>
        );
    }
}

// TODO: Add some additional styles here
const Header = styled.div`

`

const Logo = styled.h1`
    
`

const Title = styled.a`

`

const Contribute = styled.a`

`

const Search = styled.a`
    
`

export default SearchBar;
