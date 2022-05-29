import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header'
import Footer from './footer';
// import Home from './Component/Home/Home';
// import Listing from './Component/listing/listing';
// import Details from './Component/details/restDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing