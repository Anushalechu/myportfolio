import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import htlm from '../Images/html.png'
import react from '../Images/React.png'
import bootstrap from '../Images/bootstap.png'
import css from '../Images/css.jpeg'
import redux from '../Images/redux.png'
import javascript from '../Images/javascript.png'
import nodejs from '../Images/node js.png'
import git from '../Images/git.png'
import github from '../Images/github.jpeg'
import mongodb from '../Images/mongoDB.png'

function Skills() {
    return (
        <>
            <div className=' mt-5 border border-danger' style={{textAlign:"center", marginTop:"30px"}}>
                <h1>SKILLS</h1>
                <div>
                    <p>These Are The Technologies I've Worked With</p>
                </div>
                <div>
                    <Row>
                        <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={htlm} height={"250px"} />
                                <Card.Body>
                                    <Card.Title>HTML</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={react} />
                                <Card.Body>
                                    <Card.Title>React</Card.Title>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={bootstrap} />
                                <Card.Body>
                                    <Card.Title>Bootstrap</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={redux} />
                                <Card.Body>
                                    <Card.Title>Redux</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={mongodb} />
                                <Card.Body>
                                    <Card.Title>MongoDB</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={git} />
                                <Card.Body>
                                    <Card.Title>Git</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={github} />
                                <Card.Body>
                                    <Card.Title>GitHub</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={javascript}/>
                                <Card.Body>
                                    <Card.Title>JavaScript</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={nodejs} />
                                <Card.Body>
                                    <Card.Title>Node Js</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={css} />
                                <Card.Body>
                                    <Card.Title>CSS</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </div>

            </div>

        </>
    )
}

export default Skills