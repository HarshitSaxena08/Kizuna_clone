
// import Carousel from './components/carousel/carousel';
// import Destination from './components/destination/Destination';
// import Card_carousel from './components/card_carousel/Card_carousel';
// import Try from './components/try/Try';
// import W3caro from './components/w3caro/W3caro';
// import MultiCarousel from './components/Multi_carousel/MultiCarousel';
// import Owl_caro from './components/owl_caro/Owl_caro';


import Newcarousel from './component1/Components/carousel/Newcaraousel';
import Footer from './component1/Components/footer/Footer';
import Partner from './component1/Components/partner/Partner';
import Testimonial from './component1/Components/testimonial/Testimonial';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Cards from './component1/Components/Cards/Cards';
import TravelLog from './component1/Components/TravelLog/TravelLog';
import Header from './component1/Components/Header/Header';
import Booking from './component1/Components/Booking/Booking';




function App() {
  return (
    <div className="App">
      
      <Header/>
      <Booking/>
      <Cards/>
      <TravelLog/>

      


      <Newcarousel/>
      <Testimonial/>
      <Partner/> 
      <Footer/>





    </div>
  );
}

export default App;
