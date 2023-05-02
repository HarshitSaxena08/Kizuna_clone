import React from "react";
import pic1 from "../../style/images/iconbag.png";
import pic2 from "../../style/images/maldives.jpg";
import pic3 from "../../style/images/london.jpg";
import pic4 from "../../style/images/banner.jpg";
import "../../style/travelLog.css";

export default function TravelLog() {
  return (
    <>
      <div className="book-os">
        <div className="book-os-1">
          <img src={pic1} />
          <h3>Book Your Travel Today</h3>
        </div>
        <div className="guide-to">
          <p className="guide-to-1"><a href="/" > Deals from Abroad </a> </p> 
          <p className="guide-to-2"></p>
          <p className="guide-to-3">Weekend Gateways</p>
          <p className="guide-to-4"></p>
          <p className="guide-to-5">Kizuna Pledge</p>
        </div>
        <div className="location-op">
          <div className="maldives">
            <img className="img-responsive" src={pic2} />
            <h3>MAURITIUS</h3>
          </div>

          <div className="singapore">
            <img className="img-responsive" src={pic3} />
            <h3>SINGAPORE</h3>
          </div>
        </div>
        <div className="world-od">
            <div className="content-od-1">
                <div className="content-od-2">
                    <h4>IT'S A BIG WORLD OUT THERE</h4>
                    <h3>WINTER IS COMING</h3>
                    <p>Come Join us in taking a pledge - We call it the Kizuna way - To make world a better place!</p>

                </div>
                <div className="content-od-3">
                    READ MORE

                </div>

            </div>
            <div className="banner-img">
                <img src={pic4}/>

            </div>

        </div>
      </div>
    </>
  );
}
