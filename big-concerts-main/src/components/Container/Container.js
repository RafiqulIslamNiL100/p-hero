import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import './Container.css';

const Container = () => {
    const [singers, setSingers] = useState([])
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, [])
    // Button Function  // Displaying items in cart
    const handleAddToCart = (singer) => {

        const newCart = [...cart, singer]
        setcart(newCart)
    }


    return (
        <div className='main-container'>

            <div className="singers-conatiner">
                {/* key declare and using map */}
                {
                    singers.map(singer => <Singer key={singer.Name} singer={singer}
                        handleAddToCart={handleAddToCart}
                    ></Singer>)
                }
            </div>




            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Container;