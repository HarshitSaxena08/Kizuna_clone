import React, { useState } from "react";
import "../../style/booking.css";
import picc from "../../style/images/ship.jpg";
import picc1 from "../../style/images/scene.jpg";
import picc2 from "../../style/images/road.jpg";
import Oneway from "../FormComponents/Oneway";
import Return from "../FormComponents/Return";
import Multicity from "../FormComponents/Multicity";
import Aircalender from "../FormComponents/Aircalender";





export default function Booking() {



  const [oneway, setOneway] = useState(true);
  const [returnn, setReturnn] = useState(false);
  const [multicity, setMulticity] = useState(false);
  const [air, setAir] = useState(false);


  const handleFunc1 = () => {
    setOneway(true);
    setReturnn(false);
    setMulticity(false);
    setAir(false);

  }
  const handleFunc2 = () => {
    setOneway(false);
    setReturnn(true);
    setMulticity(false);
    setAir(false);

  }
  const handleFunc3 = () => {
    setOneway(false);
    setReturnn(false);
    setMulticity(true);
    setAir(false);

  }
  const handleFunc4 = () => {
    setOneway(false);
    setReturnn(false);
    setMulticity(false);
    setAir(true);

  }


  return (
    <>
      <div className="banner">
        <div className="tittle">
          <h2>
            FANCY A BREAK? <span>BOOK NOW!</span>
          </h2>
        </div>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide sliderr"
          data-bs-ride="carousel"
        >

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={picc2}
                className="d-block w-100 img-responsive"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={picc}
                className="d-block w-100 img-responsive"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={picc1}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="contenttt">
          <ul className="section">
            <li className="section-1">
              <a href="/" className="linkk-1">
                <i className="fa fa-plane"></i>
                <br />
                <p>Flights</p>
              </a>
            </li>
            <li className="section-2">
              <a href="/" className="linkk-2">
                <i className="fa fa-bed"></i>
                <br />
                <p>Hotels</p>
              </a>
            </li>
            <li className="section-3">
              <a href="/" className="linkk-3">
                <i className="fa fa-camera"></i>
                <br />
                <p>Sightseeing</p>
              </a>
            </li>
            <li className="section-4">
              <a href="/" className="linkk-4">
                <i className="fa fa-car"></i>
                <br />
                <p>Transfers</p>
              </a>
            </li>
            <li className="section-5">
              <a href="/" className="linkk-5">
                <i className="fa fa-bus"></i>
                <br />
                <p>Bus</p>
              </a>
            </li>
            <li className="section-6">
              <a href="/" className="linkk-6">
                <i className="fa fa-bus"></i>
                <br />
                <p>Train</p>
              </a>
            </li>
            <li className="section-7">
              <a href="/" className="linkk-7">
                <i className="fa fa-ship"></i>
                <br />
                <p>Cruise</p>
              </a>
            </li>
            <li className="section-8">
              <a href="/" className="linkk-8">
                <i className="fa fa-shield"></i>
                <br />
                <p>Assistance & Insurance</p>
              </a>
            </li>
            <li className="section-9">
              <a href="/" className="linkk-9">
                <i className="fa fa-suitcase"></i>
                <br />
                <p>Xplore KIZUNA</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="formmm-1">
          <input type="radio" id="Oneway" name="Formcontrol" value="Oneway" defaultChecked='true' />
          <label for="Oneway" onClick={handleFunc1}>One Way</label>
          
          
          <input type="radio" id="Return" name="Formcontrol" value="Return" />
          <label for="Return" onClick={handleFunc2}>Return</label>
          
          <input
            type="radio"
            id="Multicity"
            name="Formcontrol"
            value="Multicity"
          />
          <label for="Multicity" onClick={handleFunc3}>Multi-City</label>
          <input
            type="radio"
            id="Aircalender"
            name="Formcontrol"
            value="Aircalender"
          />
          <label for="Aircalender" onClick={handleFunc4}>Air Calender</label>
          <div className="op-qq" >
            {oneway ? <Oneway /> : null}
            {returnn ? <Return /> : null}
            {multicity ? <Multicity /> : null}
            {air ? <Aircalender /> : null}

          </div>


        </div>


      </div>

    </>
  );
}
