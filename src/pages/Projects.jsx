import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mediaplayer from '../Images/mediaplayer.png'
import ekart from '../Images/ekart.png'
import counter from '../Images/counter.png'
import netflix from '../Images/netflix.png'
import restuarant from '../Images/restuarant.png'
import simpleinterest from '../Images/simpleinterest.png'

function Projects() {
  return (
    <>
      <div className='border border-danger mt-5'>
        <div style={{ textAlign: "center", marginTop: "30px" }} >
          <h2>My Projects</h2>
        </div>
        <div className='d-flex mt-5'>
          <Row className='d-flex pt-5 mb-5 pb-5'>
            <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={mediaplayer} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>Media Player</Card.Title>
                  <div className='d-flex ms-3'>
                    <div className='ms-2'>
                      <a href="https://github.com/Anushalechu/mediaplayer.git"><Button variant="primary">gitHub</Button></a>
                    </div>
                    <div className='ms-5'>
                      <a href="https://mediaplayer-iota.vercel.app"><Button variant="primary">Live</Button></a>
                    </div>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ekart} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>Ekart</Card.Title>
                  <div className='d-flex ms-3'>
                    <div className='ms-3'>
                      <a href="https://github.com/Anushalechu/ekart.git"> <Button variant="primary">GitHub</Button></a>
                    </div>
                    <div className='ms-5'>
                      <a href="https://ekart-eta.vercel.app"> <Button variant="primary">Live</Button></a>
                    </div>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={counter} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>counter</Card.Title>
                  <div className='d-flex ms-3'>
                    <div className='ms-3'>
                      <a href="https://github.com/Anushalechu/counter.git"><Button variant="primary">GitHub</Button></a>
                    </div>
                    <div className='ms-5'>
                      <a href="https://counter-khaki-eight.vercel.app"><Button variant="primary" >Live</Button></a>
                    </div>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={simpleinterest} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>Simple Interest</Card.Title>
                  <div className='d-flex ms-3'>
                    <div className='ms-3'>
                      <a href="https://github.com/Anushalechu/simpleInterest.git"><Button variant="primary">GitHub</Button></a>
                    </div>
                    <div className='ms-5'>
                      <a href="https://simple-interest-kappa.vercel.app"><Button variant="primary">Live</Button></a>
                    </div>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={netflix} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>Netflix</Card.Title>
                  <div className='d-flex ms-3'>
                    <div className='ms-3'>
                      <a href="https://github.com/Anushalechu/netflix.git"><Button variant="primary" className='btn btn-space'>GitHub</Button></a>
                    </div>
                    <div className='ms-5'>
                      <a href="https://netflix-nine-taupe.vercel.app"><Button variant="primary">Live</Button></a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center mt-3 mb-3' xs={12} md={6} lg={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={restuarant} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>Restuarant</Card.Title>
                  <div className='d-flex ms-3'>
                    <div className='ms-3'>
                      <a href="https://github.com/Anushalechu/restaurant.git"><Button variant="primary">GitHub</Button></a>
                    </div>
                    <div className='ms-5'>
                      <a href="https://restaurant-coral-eta.vercel.app"><Button variant="primary">Live</Button></a>
                    </div>

                  </div>

                </Card.Body>
              </Card>
            </Col>
          </Row>

        </div>
      </div>
    </>
  )
}

export default Projects