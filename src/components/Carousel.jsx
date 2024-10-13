import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import projectone from "../images/memory.jpg"
import projecttwo from "../images/backend.jpg"
import projectthree from "../images/terminalconnect4.jpg"

const CarouselComponent = () => {
  return (
    <Carousel>
      <div class>
         <img src={projectone} alt='memory-project' />
		 <p className='item'><a className="carousel-link" href="https://tdunca.github.io/MemoryGame-Assignment/">M E M O R Y - A S S I G N M E N T</a></p>
       </div>
       <div>
         <img src={projecttwo} alt='backend-project' />
		 <p className='item'><a className="carousel-link" href="https://github.com/tdunca/Backend-FE-23">B A C K E N D - A S S I G N M E N T</a></p>
       </div>
      <div>
	  <img src={projectthree} alt="projecthree"/>
	  <p className='item'><a className="carousel-link" href="https://github.com/tdunca/Connect-four">I N -T E R M I N A L - C O N N E C T 4 </a></p>
     </div>
   </Carousel>
  );
};
export default CarouselComponent
