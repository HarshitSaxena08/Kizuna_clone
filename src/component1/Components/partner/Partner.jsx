import React from 'react';
import Marquee from "react-fast-marquee";
import "../../style/Partner.css";


const Partner = () => {
  return (
    <>
      <div className="partner">
        <Marquee direction="right" scroll-behavior="fast"  width="80%"  >
          <img src='./pics/partner_logo.jpg' alt='partner logo' />
        </Marquee>

        {/* <Marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
        <img src='./pics/partner_logo.jpg' alt='partner logo' />
        </Marquee> */}
      </div>
    </>
  )
}

export default Partner;