import React from 'react';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => {
    return (
        <div>
        <section className='Subscribe'>
         <Container>
            <Row>
                <Col xs={12} md={6} lg={6}>
                    <img src='https://viegypt.com/wp-content/uploads/2023/05/home-07-1.jpg' alt=''/>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <div className='Subscribe-info'>
                        <div>
                        <h2>
                           Get special offers, and more from Traveler
                        </h2>
                        <p>
                           Subscribe to see secret deals prices drop the moment you sign up!
                        </p>
                        <div>
                            <form>
                                <input type='email' className='Subscribe-email' placeholder='Email Address'/>
                                <input type='submit' className='Subscribe-submit' />
                            </form>
                        </div>
                        </div>
                    </div>
                </Col>
            </Row>
         </Container>
        </section>
        </div>
    );
}

export default Home;