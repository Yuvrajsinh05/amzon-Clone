import React, { Component } from 'react';
import './body.css';
import { Link } from 'react-router-dom'




class Slider extends Component {

    render() {
        return (
            <div className="container-fluid " id="main-section">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.ibb.co/g9T3vBZ/slide1.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/nkFCd2F/slide2.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/NW7cXCs/slide4.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
        <div id="gridcont">
            <div className="gri-ite it1" id="mode">
                <h3>Men's Clothing </h3>
                <a href=""><img src="images/c-1.jpg" alt=""/></a>
            </div>
            <div className="gri-ite it2" id="mode2">
                <h3>Girls & boys Fashion</h3>
                <div className="cc"><a href=""><img src="images/c-21.jpg" alt=""/></a><span>Clothing</span></div>
                <div className="cc"><a href=""><img src="images/c-22.jpg" alt=""/></a><span>Footwear</span></div>
                <div className="cc"><a href=""><img src="images/c-23.jpg" alt=""/></a><span>WaterProof MakeUp</span></div>
                <div className="cc"><a href=""><img src="images/c-24.jpg" alt=""/></a><span>Fashion Accesiories</span></div>
            </div>
            <div className="gri-ite it3" id="mode3">
                <h3>Women's Clothing </h3>
            </div>
            <div className="gri-ite it4" id="mode4">
                <h3>Books .........</h3>
                <a href=""><img src="./images/c-41.jpg" alt=""/></a>
                <a href=""><img src="./images/c-42.jpg" alt=""/></a>
                <a href=""><img src="./images/c-43.jpg" alt=""/></a>
                <a href=""><img src="./images/c-44.jpg" alt=""/></a>
                <a href=""><img src="./images/c-45.jpg" alt=""/></a>
                <a href=""><img src="./images/c-46.jpg" alt=""/></a>
                <a href=""><img src="./images/c-41.jpg" alt=""/></a>
            </div>
            <div className="gri-ite it5" id="mode5">
                <h3>LCD </h3>
                <a href=""><img src="images/c-5.jpg" alt=""/></a>
            </div>
            <div className="gri-ite it6" id="mode6">
                <h3>Phones</h3>
                <div className="cc"><a href=""><img src="images/c-61.jpg" alt=""/></a><span>KURTAS | upto 60% off</span>
                </div>
                <div className="cc"><a href=""><img src="images/c-62.jpg" alt=""/></a><span>SARIES | upto 60% off</span>
                </div>
                <div className="cc"><a href=""><img src="images/c-63.jpg" alt=""/></a><span>T-Shirts | upto 60% off</span>
                </div>
                <div className="cc"><a href=""><img src="images/c-64.jpg" alt=""/></a><span>Jeans | upto 60% off</span></div>
            </div>
            <div className="gri-ite it7" id="mode7">
                <h3>Shope For Your Baby by age</h3>
                <div className="cc"><a href=""><img src="images/c-71.jpg" alt=""/></a><span>0-6 month</span></div>
                <div className="cc"><a href=""><img src="images/c-72.jpg" alt=""/></a><span>6-12 month</span></div>
                <div className="cc"><a href=""><img src="images/c-73.jpg" alt=""/></a><span>12-24 month</span></div>
                <div className="cc"><a href=""><img src="images/c-74.jpg" alt=""/></a><span>24-36 month</span></div>

            </div>
            <div className="gri-ite it8" id="mode8">
                <h3>Up to 60% | Tropical hues home furnishing from local shop</h3>
                <img src="images/c-81.jpg" alt=""/>
                <img src="images/c-82.jpg" alt=""/>
                <img src="images/c-85.jpg" alt=""/>
                <img src="images/c-83.jpg" alt=""/>
                <img src="images/c-84.jpg" alt=""/>
                <img src="images/c-81.jpg" alt=""/>
            </div>
        </div>

    </div>


            )
    }

}

export default Slider;