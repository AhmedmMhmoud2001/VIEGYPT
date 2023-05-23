import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram ,faTwitter ,faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className='Footer'>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <div className='footer-col'>
                            <h4>Support</h4>
                            <div>
                                <Link to="/">
                                    Help Center
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                    Our COVID-19 Response
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                    Cancellation options
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                    Safety information
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className='footer-col'>
                            <h4>Company</h4>
                            <div>
                                <Link to="/">
                                  About us
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                Community Blog
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                Careers
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                Privacy policy
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                Terms of service
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className='footer-col'>
                            <h4>Contact</h4>
                            <div>
                                <Link to="/">
                                   Partnerships
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                   FAQ
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                Get in touch
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className='footer-col'>
                            <h4>Social</h4>
                            <div className='social'>
                                <div>
                                    <Link to="/">
                                       <FontAwesomeIcon icon={faFacebook} />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/">
                                       <FontAwesomeIcon icon={faTwitter} />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/">
                                       <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/">
                                       <FontAwesomeIcon icon={faYoutube} />
                                    </Link>
                                </div>
                            </div>
                           
                        </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col className='copyright'>
                    <p>© Copyright Traveler 2022</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;