import React from 'react';
// import "../destination/Destination.css";
import '../../style/Newcarousel.css';


export default function Newcarousel() {
    return (
        <>
            <div className='naam'>
                <h2><img src='./pics/iconbag.png' alt='iconbag'/>Top Destination</h2>
            </div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='harsh'>
                            <div className=" card" >
                                <img src="../pics/bangkok.jpg" className="card-img-top" alt="Bangkok" />
                                <div className="card-body">
                                    <h3 className="card-title">BANGKOK WITH PATTAYA</h3>
                                    <h2 className='price'><strong>INR 7000</strong></h2>
                                    <p className="card-text">THAILAND</p>
                                    <a href="/" className="dis">
                                        <div className="btn">
                                            <img className="arrow-up" src='../pics/arrowup.png' alt='arrowup' />

                                        </div>
                                        <div className='view'>
                                            View Details
                                        </div>
                                    </a>
                                </div>
                                <div className="plane_icon"><i className="fa fa-plane"></i></div>
                            </div>

                            <div className=" card" >
                                <img src="../pics/kathmandu.jpg" className="card-img-top" alt="kathmandu" />
                                <div className="card-body">
                                    <h3 className="card-title">KATHMANDU</h3>
                                    <h2 className='price'><strong>INR 7000</strong></h2>
                                    <p className="card-text">Nepal</p>
                                    <a href="/" className="dis">
                                        <div className="btn">
                                            <img className="arrow-up" src='../pics/arrowup.png' alt='arrowup' />

                                        </div>
                                        <div className='view'>
                                            View Details
                                        </div>
                                    </a>
                                </div>
                                <div className="plane_icon"><i className="fa fa-plane"></i></div>
                            </div>

                            <div className=" card" >
                                <img src="../pics/delhi.jpg" className="card-img-top" alt="delhi" />
                                <div className="card-body">
                                    <h3 className="card-title">DELHI AGRA JAIPUR</h3>
                                    <h2 className='price'><strong>INR 13500</strong></h2>
                                    <p className="card-text">INDIA</p>
                                    <a href="/" className="dis">
                                        <div className="btn">
                                            <img className="arrow-up" src='../pics/arrowup.png' alt='arrowup'/>

                                        </div>
                                        <div className='view'>
                                            View Details
                                        </div>
                                    </a>
                                </div>
                                <div className="plane_icon"><i className="fa fa-plane"></i></div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className='harsh'>
                            <div className=" card" >
                                <img src="../pics/shrinagar.jpg" className="card-img-top" alt="shrinagar" />
                                <div className="card-body">
                                    <h3 className="card-title">SHRINAGAR WITH HOUSEBOAT</h3>
                                    <h2 className='price'><strong>INR 12500</strong></h2>
                                    <p className="card-text">INDIA</p>
                                    <a href="/" className="dis">
                                        <div className="btn">
                                            <img className="arrow-up" src='../pics/arrowup.png' alt='arrowup' />

                                        </div>
                                        <div className='view'>
                                            View Details
                                        </div>
                                    </a>
                                </div>
                                <div className="plane_icon"><i className="fa fa-plane"></i></div>
                            </div>

                            <div className=" card" >
                                <img src="../pics/dubai.jpg" className="card-img-top" alt="Dubai" />
                                <div className="card-body">
                                    <h3 className="card-title">DUBAI</h3>
                                    <h2 className='price'><strong>INR 19500</strong></h2>
                                    <p className="card-text">UAE</p>
                                    <a href="/" className="dis">
                                        <div className="btn">
                                            <img className="arrow-up" src='../pics/arrowup.png' alt='arrowup' />

                                        </div>
                                        <div className='view'>
                                            View Details
                                        </div>
                                    </a>
                                </div>
                                <div className="plane_icon"><i className="fa fa-plane"></i></div>
                            </div>

                            <div className="card" >
                                <img src="../pics/corbett.jpg" className="card-img-top" alt="cobertt" />
                                <div className="card-body">
                                    <h3 className="card-title">COBERTT</h3>
                                    <h2 className='price'><strong>INR 4500</strong></h2>
                                    <p className="card-text">INDIA</p>
                                    <a href="/" className="dis">
                                        <div className="btn">
                                            <img className="arrow-up" src='../pics/arrowup.png' alt='arrowup' />

                                        </div>
                                        <div className='view'>
                                            View Details
                                        </div>
                                    </a>
                                </div>
                                <div className="plane_icon"><i className="fa fa-plane"></i></div>
                            </div>
                        </div>
                    </div>


                    <div class="carousel-item">
                        <div className='harsh'>
                            <div className="card" >
                                <img src="../pics/goa.jpg" className="card-img-top" alt="goa" />

                                <div className="card-body">
                                    <h3 className="card-title">GOA</h3>
                                    <h2 className='price'><strong>INR 7000</strong></h2>
                                    <p className="card-text">INDIA</p>
                                    <a href="/" className="dis">
                                        <div className="btn">
                                            <img className="arrow-up" src='../pics/arrowup.png' alt='arrowup' />

                                        </div>
                                        <div className='view'>
                                            View Details
                                        </div>
                                    </a>
                                </div>
                                <div className="plane_icon"><i className="fa fa-plane"></i></div>
                            </div>

                            <div className="card" >
                                <img src="../pics/rishikesh.jpg" className="card-img-top" alt="rishikesh" />
                                <div className="card-body">
                                    <h3 className="card-title">RISHIKESH</h3>
                                    <h2 className='price'><strong>INR 3000</strong></h2>
                                    <p className="card-text">INDIA</p>
                                    <a href="/" className="dis">
                                        <div className="btn">
                                            <img className="arrow-up" src='../pics/arrowup.png' alt='arrowup' />

                                        </div>
                                        <div className='view'>
                                            View Details
                                        </div>
                                    </a>
                                </div>
                                <div className="plane_icon"><i className="fa fa-plane"></i></div>

                            </div>


                            <div className="card" >
                                <img src="../pics/singapore.jpg" className="card-img-top" alt="singapore" />
                                <div className="card-body">
                                    <h3 className="card-title">SINGAPORE</h3>
                                    <h2 className='price'><strong>INR 18000</strong></h2>
                                    <p className="card-text">INDIA</p>
                                    <a href="/" className="dis">
                                        <div className="btn">
                                            <img className="arrow-up" src='../pics/arrowup.png' alt='arrowup' />

                                        </div>
                                        <div className='view'>
                                            View Details
                                        </div>
                                    </a>
                                </div>
                                <div className="plane_icon"><i className="fa fa-plane"></i></div>
                            </div>

                        </div>
                    </div>




                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
