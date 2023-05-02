import React from "react";
import "../../style/header.css";
import piccc from "../../style/images/Logo.png";


export default function Header() {
  return (
    <>
    <div className="main">
      <div className="upper-nav">
        <ul className="list">
          <li className="list-1">
            <a className="link-1" href="tel: 18002678878">
              <i className="fa fa-phone"></i> 18002678878
            </a>
          </li>
          <li className="list-2">
            <a className="link-2" href="mailto:reservations@kizunatravels.com">
              <i className="fa fa-envelope"></i> reservations@kizunatravels.com
            </a>
          </li>
          <li className="list-3">
            <a className="link-3" href="/">
              <i className="fa fa-sign-in"></i>Sign In
            </a>
          </li>
          <li className="list-4">
            <a className="link-4" href="/">
              <i className="fa fa-user"></i>Sign Up
            </a>
          </li>
        </ul>
      </div>
      <div className="lower-nav">
        
        <ul className="ul-2">
          <li className="item-1">
            <a href="/">HOME</a>
          </li>
          <li className="item-2">
            <a href="/">ABOUT US</a>
          </li>
          <li className="item-3 dropdown">
            <a
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
              href="/"
            >
              SERVICES
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="/">
                  Flight
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Hotels
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Sightseeing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Transfers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Bus
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Train
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Cruise
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Assistance & Insurance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Xplore Kizuna
                </a>
              </li>
            </ul>
          </li>
          <li className="item-4">
            <a href="/">CONTACT US</a>
          </li>
        </ul>
        <div className="right-content">
              
                <i className="fa fa-headphones"></i>
              
              <div className="span-2">
                <p className="p-1">18002678878</p>
                <p className="p-2">24/7 support</p>
              </div>
              <button>Manage Booking</button>
            </div>
            <i className="fa fa-bars iconi"></i>
      </div>
      <div className="logo">
        <a href="/">
        <img src={piccc} alt="Logo"/>
        </a>
      </div>
      
      </div>
    </>
  );
}
