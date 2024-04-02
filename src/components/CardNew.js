import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cardsdata from './CardsData';
import './Stylely.css';
import { useDispatch } from 'react-redux';
import { ADD } from './redux/actions/action';

function CardNew() {
    const [data, setData] = useState(Cardsdata);
    const dispatch = useDispatch();
    const send = (e) => {
        dispatch(ADD(e));
    }

    return (
        <div className="container mt-3 cardNewContainer">
            <h2 style={{ color: 'black', textAlign: 'center' }}>Ayurvedic Products</h2>
            <div className="row d-flex justify-content-center align-items-center">
                {data.map((element, id) => {
                    return (
                        <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style bg-white">
                            <Card.Img variant="top" src={element.imageUrl} style={{ height: "16rem" }} className="mt-3" />
                            <Card.Body>
                                <Card.Title className="black-text">{element.title}</Card.Title>
                                <Card.Text className="black-text">
                                    Price: LKR {element.price}
                                </Card.Text>
                                <div className="button_div d-flex justify-content-center">
                                    <Button variant="primary"
                                        onClick={() => send(element)}
                                        className='col-lg-12'>Add to Cart
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default CardNew;
