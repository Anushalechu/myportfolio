import React from 'react'
import Image from '../Images/myphoto.jpeg'
import { Col, Row } from 'react-bootstrap'

function About() {
    return (
        <>
            <div className=" container justify-content-between align-item-center border border-danger mt-5">
                <h1 style={{ color: "black", textAlign: "center", marginTop: "30px" }}>About</h1>
                <div className='d-flex justify-content-between'>
                    <Row className='d-flex' >
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div style={{ fontSize: "20px" }}>

                                <p>Hello , I'm Anusha A BTech graduate 2023 passout and a full stack developer.
                                    I have a strong command over both front-end and back-end technologies, allowing me to build complete and scalable applications.
                                </p>

                                <p>On the front-end side, I specialize in HTML, CSS, and JavaScript frameworks such as React and Angular.
                                    I’m passionate about creating intuitive user interfaces that provide an exceptional user experience.
                                    I pay great attention to detail, ensuring that the websites or applications I develop are responsive, visually appealing, and accessible across different devices and browsers.</p>
                                <p>Moving to the back end, I’m proficient in server-side languages like Node.js.
                                    I have extensive working with databases such as MySQL and MongoDB, and I can design efficient database structures and write optimized queries.
                                    I’m familiar with RESTful APIs and know how to integrate them into applications to enable seamless communication between the front end and back end.</p>
                                <p>Additionally, I have expertise in version control systems like Git. I enjoy staying up to date with the latest trends and technologies in the web development world,
                                    as it allows me to continually improve my skills and deliver cutting-edge solutions.</p>
                                <p>I’m excited to be part of a team where I can contribute my full stack development skills and help create innovative and impactful applications.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className='text-center p-5 mx-auto'>
                            <div className='pb-5' >
                                <img src={Image} alt="" width="400px" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default About