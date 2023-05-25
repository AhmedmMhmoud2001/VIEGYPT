import React from 'react';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Sectionbookinghome from '../../components/sectionbooking/Sectionbookinghome';
import SectionbookingSM from '../../components/sectionbooking/SectionbookingSM';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Home = () => {
    const responsive = {
        
        desktop: {
          breakpoint: { max: 1400, min: 1024 },
          items: 2,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    return (
        <div>
        <section className='banner'>
            <div className='banner-info'>
               <p>Let the journey begin</p>
               <p>Get the best prices on 2,000,000+ properties, worldwide</p>
            </div>
        </section>
        <section className='sectionbooking'>
            <div className='linkes-Banner'>
                {/* <Container>
                    <Row>
                        <Col xs={3} md={2} lg={2} >
                        Hotel
                        </Col>
                        <Col xs={3} md={2} lg={2} >
                        Tours
                        </Col>
                        <Col xs={3} md={2} lg={2} >
                        Activity
                        </Col>
                        <Col xs={3} md={2} lg={2} >
                        Rental
                        </Col>
                        <Col xs={3} md={2} lg={2} >
                        Cars Rental
                        </Col>
                        <Col xs={3} md={2} lg={2} >
                        Car Transfer
                        </Col>
                    </Row>
                </Container> */}
                <ul>
                    <li>
                        hotel
                    </li>
                    <li>
                        Tours
                    </li>
                    <li>
                        Activity
                    </li>
                    <li>
                        Rental
                    </li>
                    <li>
                        Cars Rental
                    </li>
                    <li>
                        Car Transfer
                    </li>
                </ul>
            </div>
            <div>
                <Sectionbookinghome/>
            </div>
        </section>
        <section className='sectionbooking-sm'>
            <SectionbookingSM/>
        </section>
        <section>
            <Container>
                <Row className='my-5'>
                    <Col xs={12} md={6} lg={6} className='my-3' >
                        <div className='elementor-widget-container'>
                            <img src='https://viegypt.com/wp-content/uploads/2023/05/entrada-siam-park-grid.jpg' alt=''/>
                        </div>
                       
                    </Col>
                    <Col xs={12} md={6} lg={6} className='my-3'>
                        <div className='elementor-widget-container'>
                       <img src='https://viegypt.com/wp-content/uploads/2023/05/tour-coliseo-arena-gladiadores-grid.jpg' alt=''/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='top-destinations'>
            <h2 className='title'>Top destinations</h2>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4} className='top-destinations-item my-3'>
                        <Link to="/">
                            <div className='card-img'>
                                <img src='https://viegypt.com/wp-content/uploads/2022/04/Screenshot_74.jpg' alt=''/>
                                <div className='title-img'>
                                    <h3>cairo</h3>
                                </div>
                            </div>
                            <div className=' card-z card-info'>
                                <Container>
                                        <Row>
                                            <Col xs={12} md={12} lg={12}>
                                                <h3>cairo</h3>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}>
                                                <p>18 Cars</p>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                        </Row>
                                </Container>
                            </div>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='top-destinations-item my-3'>
                        <Link to="/">
                            <div className='card-img'>
                                <img src='https://viegypt.com/wp-content/uploads/2022/04/Screenshot_75.jpg' alt=''/>
                                <div className='title-img'>
                                    <h3>cairo</h3>
                                </div>
                            </div>
                            <div className=' card-z card-info'>
                                <Container>
                                        <Row>
                                            <Col xs={12} md={12} lg={12}>
                                                <h3>cairo</h3>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}>
                                                <p>18 Cars</p>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                        </Row>
                                </Container>
                            </div>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='top-destinations-item my-3'>
                        <Link to="/">
                            <div className='card-img'>
                                <img src='https://viegypt.com/wp-content/uploads/2022/04/Screenshot_76.jpg' alt=''/>
                                <div className='title-img'>
                                    <h3>cairo</h3>
                                </div>
                            </div>
                            <div className=' card-z card-info'>
                                <Container>
                                        <Row>
                                            <Col xs={12} md={12} lg={12}>
                                                <h3>cairo</h3>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}>
                                                <p>18 Cars</p>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                        </Row>
                                </Container>
                            </div>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='top-destinations-item my-3'>
                        <Link to="/">
                            <div className='card-img'>
                                <img src='https://viegypt.com/wp-content/uploads/2022/04/Screenshot_77.jpg' alt=''/>
                                <div className='title-img'>
                                    <h3>cairo</h3>
                                </div>
                            </div>
                            <div className=' card-z card-info'>
                                <Container>
                                        <Row>
                                            <Col xs={12} md={12} lg={12}>
                                                <h3>cairo</h3>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}>
                                                <p>18 Cars</p>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                        </Row>
                                </Container>
                            </div>
                        </Link>
                    </Col>
                    {/* <Col xs={12} md={6} lg={4} className='top-destinations-item my-3'>
                        <Link to="/">
                            <div className='card-img'>
                                <img src='https://viegypt.com/wp-content/uploads/2022/04/sacramento-california.jpg' alt=''/>
                                <div className='title-img'>
                                    <h3>cairo</h3>
                                </div>
                            </div>
                            <div className=' card-z card-info'>
                                <Container>
                                        <Row>
                                            <Col xs={12} md={12} lg={12}>
                                                <h3>cairo</h3>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}>
                                                <p>18 Cars</p>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                        </Row>
                                </Container>
                            </div>
                        </Link>
                    </Col> */}
                    <Col xs={12} md={6} lg={4} className='top-destinations-item my-3'>
                        <Link to="/">
                            <div className='card-img'>
                                <img src='https://viegypt.com/wp-content/uploads/2022/04/Screenshot_73.jpg' alt=''/>
                                <div className='title-img'>
                                    <h3>cairo</h3>
                                </div>
                            </div>
                            <div className=' card-z card-info'>
                                <Container>
                                        <Row>
                                            <Col xs={12} md={12} lg={12}>
                                                <h3>cairo</h3>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}>
                                                <p>18 Cars</p>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                        </Row>
                                </Container>
                            </div>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='top-destinations-item my-3'>
                        <Link to="/">
                            <div className='card-img'>
                                <img src='https://viegypt.com/wp-content/uploads/2022/04/sacramento-california.jpg' alt=''/>
                                <div className='title-img'>
                                    <h3>cairo</h3>
                                </div>
                            </div>
                            <div className=' card-z card-info'>
                                <Container>
                                        <Row>
                                            <Col xs={12} md={12} lg={12}>
                                                <h3>cairo</h3>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}>
                                                <p>18 Cars</p>
                                            </Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                            <Col xs={6} md={6} lg={6}><p>18 Cars</p></Col>
                                        </Row>
                                </Container>
                            </div>
                        </Link>
                    </Col>
                    
                    
                </Row>
            </Container>
        </section>
        <section className='Recommended'>
          <div className='RecommendedLink'>
           <h3>Recommended for you</h3>
            <div>
                <button>Hotel</button>
                <button>Tour</button>
                <button>Activity</button>
                <button>Rental</button>
                <button>Car</button>
            </div>
           </div>
        </section>
        <section className='Storiestipsandguides'>
       <Container>
            <h2> Stories, tips, and guides </h2>
            <Carousel responsive={responsive}>
                <div>
                    <div>
                        <img src="https://viegypt.com/wp-content/uploads/2022/04/Screenshot_79-450x300.jpg" alt=""/>
                    </div>
                    <div>
                        <p>BOOKING</p>
                        <h4>The Ultimate Cheat Sheet on Travel</h4>
                        <p>relocated by your company, it can seem daunting to visit… </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://viegypt.com/wp-content/uploads/2022/04/Screenshot_79-450x300.jpg" alt=""/>
                    </div>
                    <div>
                        <p>BOOKING</p>
                        <h4>The Ultimate Cheat Sheet on Travel</h4>
                        <p>relocated by your company, it can seem daunting to visit… </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://viegypt.com/wp-content/uploads/2022/04/Screenshot_79-450x300.jpg" alt=""/>
                    </div>
                    <div>
                        <p>BOOKING</p>
                        <h4>The Ultimate Cheat Sheet on Travel</h4>
                        <p>relocated by your company, it can seem daunting to visit… </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://viegypt.com/wp-content/uploads/2022/04/Screenshot_79-450x300.jpg" alt=""/>
                    </div>
                    <div>
                        <p>BOOKING</p>
                        <h4>The Ultimate Cheat Sheet on Travel</h4>
                        <p>relocated by your company, it can seem daunting to visit… </p>
                    </div>
                </div>
            </Carousel>
       </Container>
        </section>
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