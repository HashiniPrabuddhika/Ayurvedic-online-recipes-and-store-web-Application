import React, { useEffect, useState } from 'react'
import './Navbar.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from '@mui/material/Badge';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import './Stylely.css';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from './redux/actions/action';
import Container from 'react-bootstrap/Container'

export default function Navbar() {

    const [price, setPrice] = useState(0);

    const getdata = useSelector((state) => state.cartreducer.carts);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {
        setAnchorEl(null);

    };

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Container>
                    <Link className="navbar-brand" to="/">
                        <div className="custom-logo-container">
                            <img src="/images/logo.png" alt="Company Logo" className="custom-logo" />
                        </div>
                    </Link>


                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Recipes</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" style={{ marginRight: '-50px' }}>
                                Login
                            </Link>
                        </li>
                    </ul>

                </Container>
                <Badge badgeContent={getdata.length} color="primary" style={{ marginRight: '30px' }}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >

                    <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white', fontSize: '30px', marginRight: '5px' }} />
                </Badge> <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table className="black-text">
                                    <thead>
                                        <tr >
                                            <th>Photo</th>
                                            <th>Product Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <Link to={`/cart/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.imageUrl} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <p>{e.title}</p>
                                                                <p>Price : LKR{e.price}</p>
                                                                <p>Quantity : {e.qnty}</p>
                                                                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p>
                                                            </td>

                                                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'>Total :LKR{price}</p>
                                    </tbody>
                                </Table>
                            </div> :

                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "15rem", padding: 2, position: "relative" }}>
                                <span
                                    onClick={handleClose}
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        right: 10,
                                        fontSize: 18,
                                        cursor: "pointer",
                                        color: "red",
                                    }}
                                >
                                    X
                                </span>
                                <p style={{ top: 10, fontSize: 16, fontFamily: 'sans-serif', }}>
                                    Your cart is empty
                                </p>
                                <img src="./images/cart.gif" alt="" className='emptycart_img' style={{ width: "4rem", padding: 10 }} />
                            </div>

                    }

                </Menu>
            </nav>

        </>
    );
}
