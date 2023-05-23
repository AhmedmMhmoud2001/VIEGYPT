import React, { useState } from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faAngleLeft, faBars, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram ,faTwitter ,faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    //     const [isHovered1, setIsHovered1] = useState(false);
    //     const [isHovered2, setIsHovered2] = useState(false);
    //     const [isHovered3, setIsHovered3] = useState(false);
    //     const [isHovered4, setIsHovered4] = useState(false);
    //     const [isHovered5, setIsHovered5] = useState(false);
    //     const [isHovered6, setIsHovered6] = useState(false);
    //     const [isHovered7, setIsHovered7] = useState(false);

    //   const handleMouseEnter1 = () => {
    //     setIsHovered1(true);
    //   };

    //   const handleMouseLeave1 = () => {
    //     setIsHovered1(false);
    //   };
    //   const handleMouseEnter2 = () => {
    //     setIsHovered2(true);
    //   };

    //   const handleMouseLeave2 = () => {
    //     setIsHovered2(false);
    //   };
    //   const handleMouseEnter3 = () => {
    //     setIsHovered3(true);
    //   };

    //   const handleMouseLeave3 = () => {
    //     setIsHovered3(false);
    //   };
    //   const handleMouseEnter4 = () => {
    //     setIsHovered4(true);
    //   };

    //   const handleMouseLeave4 = () => {
    //     setIsHovered4(false);
    //   };
    //   const handleMouseEnter5 = () => {
    //     setIsHovered5(true);
    //   };

    //   const handleMouseLeave5 = () => {
    //     setIsHovered5(false);
    //   };
    //   const handleMouseEnter6 = () => {
    //     setIsHovered6(true);
    //   };

    //   const handleMouseLeave6 = () => {
    //     setIsHovered6(false);
    //   };
    //   const handleMouseEnter7 = () => {
    //     setIsHovered7(true);
    //   };

    //   const handleMouseLeave7 = () => {
    //     setIsHovered7(false);
    //   };
    //   let elementClassName1 =" " ;

    //  if(isHovered1===false){
    //      elementClassName1=" "
    //  }
    //  else{
    //     elementClassName1="show"
    //  }
    // //   const elementClassName1 = !isHovered1 ? '' : '';
    //   const elementClassName2 = isHovered2 ? 'show' : '';
    //   const elementClassName3 = isHovered3 ? 'show' : '';
    //   const elementClassName4 = isHovered4 ? 'show' : '';
    //   const elementClassName5 = isHovered5 ? 'show' : '';
    //   const elementClassName6 = isHovered6 ? 'show' : '';
    //   const elementClassName7 = isHovered7 ? 'show' : '';


    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };


    return (
        <div className='header'>
            <div className='topbar'>
                <div>
                   <ul className='topbar-left'>
                        <li>
                            <Link to="/">
                               <FontAwesomeIcon icon={faPhone} />
                               (000) 999 -656 -888
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                               <FontAwesomeIcon icon={faEnvelope} />
                               travelerwp@gmail.com
                            </Link>
                        </li>
                   </ul>
                </div>
                <div>
                   <ul>
                        <li>
                            <Link to="/">
                               <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                               <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                               <FontAwesomeIcon icon={faInstagram } />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                               <FontAwesomeIcon icon={faYoutube} />
                            </Link>
                        </li>
                   </ul>
                </div>
            </div>
            <div className='navbar'>
                <div className='bars' onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className='navbar-left'>
                    <img src="https://viegypt.com/wp-content/uploads/2022/04/LOGO-5-1.png" alt="viegypt" />
                </div>
                <div className='navbar-center'>
                    <ul className='nav-link'>
                        <li>
                            <div className='link-home'>
                                Home
                            </div>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic" >
                                    Chauffer Service
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic" >
                                    Airport
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item href="#/action-1">USDww</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic">
                                    Car Rental
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic">
                                    Egypt Excursions
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic" >
                                    Meet and Service
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic"
                                >
                                    Tour
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="">
                                    Activity
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
                <div className='navbar-right'>
                    <ul className=''>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic">
                                    EUR
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <div className='icons'>
                                {/* beat */}
                                <FontAwesomeIcon icon={faCartShopping} />
                            </div>
                        </li>
                        <li>
                            <div className='icons'>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={isSidebarVisible ? 'visible' : ''} id="slidbar" >
                <ul className='slidbar-nav-link'>
                    <li className='close-navbar' onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </li>
                    <li>
                        <div className='link-home'>
                            Home
                        </div>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic">
                                Chauffer Service
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic" >
                                Airport
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item href="#/action-1">USDww</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic" >
                                Car Rental
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic" >
                                Egypt Excursions
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic" >
                                Meet and Service
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic" >
                                Tour
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="" >
                                Activity
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;