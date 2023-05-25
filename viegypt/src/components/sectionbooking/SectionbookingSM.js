import React from 'react';
import './Sectionbookinghome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLocationDot, faRightLong, faUserGroup} from '@fortawesome/free-solid-svg-icons'
const Sectionbooking = () => {
    return (
        <div className='SectionbookingSM'>
            <div className='sectionbooking-Location SectionbookingSMdiv'>
            <div >
                <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
                <div>Location</div>
                <div> where are you doing</div>
            </div>
            </div>
            <div className='sectionbooking-time  SectionbookingSMdiv' >
                <div className='sectionbooking-Location'>
                <div >
                    <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div>
                    <div>Check in</div>
                    <div> 28/5/2023 </div>
                </div>
                </div>
                <div className=' RightLong'>
                <FontAwesomeIcon icon={faRightLong} />
                </div>
                <div className='sectionbooking-Location'>
                <div >
                    <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div>
                    <div>Check out</div>
                    <div> 20/6/2023</div>
                </div>
                </div>
            </div>
            <div className='sectionbooking-Location  SectionbookingSMdiv'>
            <div >
                <FontAwesomeIcon icon={faUserGroup} />
            </div>
            <div>
                <div>Guests</div>
                <div> Add guests and rooms</div>
            </div>
            </div>
            <div className='sectionbooking-searchSM '>
                <input type='submit' value="search"/>
            </div>
    
    </div>
    );
}

export default Sectionbooking;