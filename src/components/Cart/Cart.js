import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';

const Cart = (props) => {
    // icon
    const element = <FontAwesomeIcon icon={faUserPlus} />
    const cartIcon = <FontAwesomeIcon icon={faShoppingBag} />
    console.log(props)
    const { cart } = props;

    let singerName = [];
    let totalCost = 0;
    for (const singer of cart) {
        singerName = (singer.Name + ".." + singerName);
        totalCost = totalCost + singer.singerFee;
    }

    return (
        <div>
            <h3 className='info'> {cartIcon} Cart Information</h3>
            <span><Card.Body> </Card.Body></span>
            <div className='singer-information'>
                <h5>Total Singer : {cart.length} </h5>
                <h4>Total Cost : ${totalCost}</h4>
                <h6>Singer Added {element} :</h6>
            </div>
            <span className='singer-names'><Card.Body>{singerName}</Card.Body></span>
        </div>
    );
};

export default Cart;