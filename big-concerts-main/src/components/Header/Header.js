import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGifts } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';

const Header = () => {
    // icon
    const element = <FontAwesomeIcon icon={faGifts} />
    return (
        <div className='header'>
            <h2>{element} Welcome To Our Big  Concert Programme !!!</h2>
            <h4>We are arranging a big concert with all Worldwide Popular Singers In BANGLADESH</h4>
            <h5>To Represent Our Country in a different method</h5>
            <h5>Duration is 15 Days From 01.10.2021 To 15.10.2021</h5>
            <h5> [Hope You all will enjoy the programme!!]</h5>
            <span><Card.Body></Card.Body></span>
            <h2>Maximum Total Budget is $ 3,000,00 !!</h2>



        </div>
    );
};

export default Header;