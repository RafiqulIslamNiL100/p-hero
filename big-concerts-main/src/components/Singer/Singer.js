import './Singer.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Singer = (props) => {
    // icon 
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // distructuring 
    const { Name, age, country, singerFee, img, favouriteLanguage } = props.singer
    return (
        <div>
            <Card className='card-body'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name : <span className='singer-name'>{Name}</span></Card.Title>
                    <p>Age: {age} </p>
                    <p>Country: {country}</p>
                    <p>Singer Fee: <span className='fee'> ${singerFee}</span></p>
                    <p>Fabourite Language to Sing: {favouriteLanguage}</p>
                    <button className='addToCartBtn mx-auto' onClick={() => props.handleAddToCart(props.singer)}> {element}Select This Singer</button>
                </Card.Body>

            </Card>
        </div >
    );
};

export default Singer;