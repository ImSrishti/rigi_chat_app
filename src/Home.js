import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link ,BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import ChatPage from './ChatPage';
import './App.css';
const Home = () => {

    const [Names, setNames] = useState(['Apple', 'Google', 'Android', 'Motorola'])

    return (
        <Router>
            <Container className="container" fluid>
                <Row style={{ height: "10%" }}>
                    <Col style={{ border: "1px solid white", textAlign:"center"}}>Chat App </Col>
                </Row>
                <Row style={{ height: "90%" }}>
                    <Col sm={3}>
                        <Row>
                            {
                                Names.map((x, index) => (

                                    <Link style={{ textDecoration: 'none', color: "inherit" }} to={`/chat/${index}`}>
                                        <Col className="nameStyle" md={12} >{x}</Col>
                                    </Link>
                                ))
                            }
                        </Row>
                    </Col>

                    <Col className="chat_body">
                               

                        <Switch>
                            <Route path="/chat/:id" children={<ChatPage/>}></Route>
                        </Switch>

                    </Col>

                </Row>
            </Container>
        </Router>
    )
}

export default Home
