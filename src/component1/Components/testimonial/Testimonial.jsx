import React from 'react';
import { useState } from 'react';
// import './Testimonial.css';
import '../../style/Testimonial.css';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const [read, setRead] = useState(false);
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...show more" : " show less"}
      </span>
    </p>
  );
};



const Testimonial = () => {
  return (

    <>
      <div className='heading'>
        <h2><img src='../pics/iconbag.png' />Testimonial </h2>
      </div>

    <div className='jj'>
      {/* i'm try carousel with testimonial */}

      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='boxx'>
              <div className="shadow">
                <div className="testi-box">
                  <div className="imgg">
                    <img src="../pics/testi-img1.png" alt="testi 1" />
                  </div>
                  <div className="authorr">
                    <div className="name  ">Mr Sankalp Joisar<span>Owner/Chairman - Raj Steel Enterprises</span></div>

                    <div className="testi-content  ">
                      <ReadMore >
                        I really appreciate all the extra details and touches you so kindly offered us.
                        My best travel memories will always be of lonavala and Somnath on the trips organised by Kizuna.
                        I want to thank you and all the KIZUNA TRAVEL EXPERTS at KIZUNA VERTICALS PRIVATE LIMITED who helped make our trip so much fun and interesting.
                        KIZUNA - MY TRAVEL PARTNER
                      </ReadMore>

                    </div>
                  </div>

                </div>
              </div>

              <div className="shadow">
                <div className="testi-box">
                  <div className="imgg">
                    <img src="../pics/testi-img4.png" alt="testi 4" />
                  </div>
                  <div className="authorr">
                    <div className="name ">Mr Ketul Changani<span>Owner/MD - Ambark Organics</span></div>

                    <div className="testi-content">
                      <ReadMore >
                        Since March 2021 for my Domestic Travel I have used the services of Team KIZUNA.I just have one word for them- FANTASTIC.
                        Brilliant coordination and even in case of short term planning or last minute changes the SOLUTIONS rendered by KIZUNA TRAVEL EXPERTS.
                        I am Waiting for international travel( Post these COVID TIMES ) so that I can plan my holidays abroad with KIZUNA.
                        I will always recommend this AMAZING TRAVEL CLUB- KIZUNA- Indeed bonding you to the world!
                      </ReadMore>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div className='boxx'>
              <div className="shadow">
                <div className="testi-box">
                  <div className="imgg">
                    <img src="../pics/testi-img2.png" alt="testi 2" />
                  </div>
                  <div className="authorr">
                    <div className="name  ">Mr Hiren Changani<span>MD/Chairman- Cropino Private Limited</span></div>

                    <div className="testi-content  ">
                      <ReadMore >
                        Excellent Arrangements made for our family.  Your Travel expert did an excellent job in getting us the best hotels at best locations at reasonable rates.
                        Local arrangements like sightseeing, local travel etc were also very good.
                        The best part was that we were guided very well also. Excellent job done.
                        KUDOS TEAM KIZUNA
                      </ReadMore>

                    </div>
                  </div>

                </div>
              </div>

              <div className="shadow">
                <div className="testi-box">
                  <div className="imgg">
                    <img src="../pics/testi-img3.png" alt="testi 3" />
                  </div>
                  <div className="authorr">
                    <div className="name  ">Mr. M. Hussain Kalsekar<span>Deputy General Manager - TFD<br />President and Founder - Khidmaah Foundation</span></div>

                    <div className="testi-content  ">
                      <ReadMore>
                        Why Kizuna???? Because Booking tickets or travel packages is just one click via whatsapp/call/email.
                        The customer service is so uber cool and user friendly in just 10 mins you get the best rate on the internet.
                        Yes. You heard it right. And their follow up team is superb. Payment mode is also hassle free. I highly recommend Kizuna for family trips or professional trips.
                        Just go for it.
                      </ReadMore>
                    </div>
                  </div>

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
      </div >
    </div>
    </>
  )
}

export default Testimonial;