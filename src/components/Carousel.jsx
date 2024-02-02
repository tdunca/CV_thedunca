import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import projectone from "../images/projectone.jpg"
import projecttwo from "../images/projecttwo.jpg"
import projectthree from "../images/projectthree.jpg"

const CarouselComponent = () => {
  return (
    <Carousel>
      <div class>
         <img src={projectone} alt='projectone' />
		 <p className='item'><a className="carousel-link" href="https://github.com/">P R O J E C T O N E</a></p>
       </div>
       <div>
         <img src={projecttwo} alt='projecttwo' />
		 <p className='item'><a className="carousel-link" href="https://github.com/">P R O J E C T T W O</a></p>
       </div>
      <div>
	  <img src={projectthree} alt="projecthree"/>
	  <p className='item'><a className="carousel-link" href="https://github.com/">P R O J E C T T H R E E</a></p>
     </div>
   </Carousel>
  );
};
export default CarouselComponent
