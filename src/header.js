import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'




class Header extends Component {

    render() {
        return (
            <header>
                <nav>
                    <img src="https://i.ibb.co/XkRZBSx/amazon.png" alt="" style={{height: '40px',width: '100px',float: 'left',marginTop: '30px'}} />
                    <ul>
                        <li className="nloc navitem">
                            <button id="weather"><span><i>Clickme:</i><br /><b>Location & weather</b></span></button>
                        </li>
                        <li className="navitem">
                            <span>
                                <div className="dropdown" style={{float: 'left'}}>
                                    <button className="btn btn-secondary dropdown-toggle navD1" type="button"  id='dropdownMenuButton1'
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        all
                                    </button>
                                    <ul className="dropdown-menu drop" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Books</a></li>
                                        <li><a className="dropdown-item" href="#">Tv</a></li>
                                        <li><a className="dropdown-item" href="#">Lcd</a></li>
                                        <li><a className="dropdown-item" href="#">Men's Fashion</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    <input type="text" />
                                    <span style={{fontSize: '15px'}}>&nbsp;&nbsp;<i className="fa-solid fa-magnifying-glass">&nbsp;&nbsp;&nbsp;</i></span>
                                </div>
                            </span>
                        </li>
                        <li className="flag navitem">
                            <img src="https://i.ibb.co/H7cJ4rz/world.png" alt="" style={{height: '25px', width: '25px' }}/>
                            <span style={{fontSize: '10px'}}><i className="fa-solid fa-caret-down"></i></span>
                        </li>
                        <li className="login navitem">
                            <i>Hello,sign in</i><br /><b>Accounts&Lists&nbsp;&#9662;</b>
                        </li>
                        <li className="rnd navitem">
                            <span>Returns<br/><b>&Orders</b></span>
                        </li>
                        <li className="cart navitem">
                            <img src="https://i.ibb.co/J5ZLSKw/cart.png" alt="" style={{height: '30px', width: '30px'}} />
                            <b className="carttext">Cart</b>
                        </li>
                    </ul>
                </nav>
                <nav className="navbar navbar-light bg-light  nav2">
        <div className="container-fluid">
            <a className="navbar-brand btn btn-outline-dark " href="#">Best Sellers</a>
            <a className="navbar-brand  btn btn-outline-dark " href="#">Mobile</a>
            <a className="navbar-brand  btn btn-outline-dark" href="#">Customer Service</a>
            <a className="navbar-brand btn btn-outline-dark " href="#">Prime</a>
            <a className="navbar-brand btn btn-outline-dark " href="#">Fashion</a>
            <a className="navbar-brand  btn btn-outline-dark" href="#">Books</a>
            <a className="navbar-brand  btn btn-outline-dark" href="#">New Release</a>


            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
                All
            </button>

            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><i className="fa-solid fa-circle-user"></i>
                        Hello,sign in</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Trending
                            </a>
                            <ul className="dropdown-menu" style={{zIndex:'10000'}} aria-labelledby="offcanvasNavbarDropdown">
                                <li><a className="dropdown-item" href="#">Best Sellers</a></li>
                                <li><a className="dropdown-item" href="#">New Release</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">other</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Shop By Department
                            </a>
                            <ul className="dropdown-menu" style={{zIndex: '10000'}} aria-labelledby="offcanvasNavbarDropdown">
                                <li><a className="dropdown-item" href="#">Electronics</a></li>
                                <li><a className="dropdown-item" href="#">Men's Fashion</a></li>
                                <li><a className="dropdown-item" href="#">women's Fashion</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">See all</a></li>
                            </ul>
                        </li>
                    </ul>
                    <hr className="dropdown-divider"/>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <br/><br/>
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Help & Setting
                            </a>
                            <ul className="dropdown-menu" style={{zIndex: '10000'}} aria-labelledby="offcanvasNavbarDropdown">
                                <li><a className="dropdown-item" href="#">Your Account</a></li>
                                <li><a className="dropdown-item" href="#">sign In</a></li>
                                <li><a className="dropdown-item" href="#">Customer Service</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">&copy; iUV</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
            </header>
        )
    }

}

export default Header;