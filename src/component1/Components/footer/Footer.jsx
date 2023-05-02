import React from 'react';
import '../../style/Footer.css';


const Footer = () => {
    return (
        <>
            <div className="">
                <div className="bigbo">
                    <div className="tborow">
                        <div className="box">
                            <h5 className="heading">Contact Us</h5>
                            <ul className="collection">
                                <li className='list1' >
                                    <span className='li1'><i className="fa fa-home"></i>Corporate <span id='span2'>Office</span></span>
                                    <div className="info info1"> : Pakeeza Apartments, LBS Road, Behind SBI,
                                     Kurla West, Mumbai - 400070.</div>
                                </li>
                                {/* <li><span>Office</span></li> */}
                                <li><span><i className="fa fa-phone"></i>Phone No.</span><div className="info"> : <a href="/"> 18002678878</a></div></li>
                                <li><span><i className="fa fa-envelope"></i>Email</span><div className="info"> : <a href="/"> reservations@kizunatravels.com</a></div></li>
                            </ul>
                        </div>
                        
                        
                        <div className='tt'>
                            <div className="box ">
                                <h5 className="heading">Booking Now</h5>
                                <ul className="arrow">
                                    <li><i className="fa fa-angle-right"></i> <a href="/" >&nbsp;&nbsp;Flights</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="/" >&nbsp;&nbsp; Hotels</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="/" >&nbsp;&nbsp;Holidays</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="/" >&nbsp;&nbsp;Bus</a></li>
                                </ul>
                            </div>
                        
                            <div className="box">
                                <h5 className="heading">Support</h5>
                                <ul className="arrow">
                                    <li><i className="fa fa-angle-right"></i> <a href="/"> &nbsp;&nbsp; Services</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="/"> &nbsp;&nbsp; About Us</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="/"> &nbsp;&nbsp; Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="box">
                                <h5 className="heading">Policies & Terms</h5>
                                <ul className="arrow">
                                    <li><i className="fa fa-angle-right"></i> <a href="/"> &nbsp;&nbsp; Privacy Policy</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="/">&nbsp;&nbsp; Terms of Use</a></li>
                                </ul>
                            </div>
                        </div>

                        
                    </div>

                    <div className='t2'>
                            <div className="box box2 ">
                                <h5 className="heading">Booking Now</h5>
                                <ul className="arrow">
                                    <li><i className="fa fa-angle-right"></i> <a href="/" >&nbsp;&nbsp;Flights</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="/" >&nbsp;&nbsp; Hotels</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="/" >&nbsp;&nbsp;Holidays</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="/" >&nbsp;&nbsp;Bus</a></li>
                                </ul>
                            </div>
                        
                            <div className="box box2">
                                <h5 className="heading">Support</h5>
                                <ul className="arrow">
                                    <li><i className="fa fa-angle-right"></i> <a href="/"> &nbsp;&nbsp; Services</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="/"> &nbsp;&nbsp; About Us</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="/"> &nbsp;&nbsp; Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="box box2">
                                <h5 className="heading">Policies & Terms</h5>
                                <ul className="arrow">
                                    <li><i className="fa fa-angle-right"></i> <a href="/"> &nbsp;&nbsp; Privacy Policy</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="/">&nbsp;&nbsp; Terms of Use</a></li>
                                </ul>
                            </div>
                        </div>

                </div>
            </div>

            <div className='flogo' >
                <img src='./pics/flogo.jpg' alt='flogo'/>
            </div>
        
        <div className='wrap'>
            <div className='lowerfooter'>
                <p>@2021 Kizuna. All Rights Reserved.</p>
            </div>
            
            <div className='lower side'> 
                <p> Follow Us  : 
                  <a href='/'> <img src='./pics/fb.jpg' alt='fb logo' className='logos'  /></a>
                  <a href='/'> <img src='./pics/linkedin.png' alt='linkedin logo' className='logos'/></a>
                  <a href='/'> <img src='./pics/insta.jpg' alt='insta logo'  className='logos' /></a>
                </p>
            </div>
        </div>

        </>
    )
}

export default Footer;