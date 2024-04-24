import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import projectone from "../images/memory.jpg"
import projecttwo from "../images/backend.jpg"
import projectthree from "../images/ux-design.jpg"

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
	  <p className='item'><a className="carousel-link" href="https://www.figma.com/proto/KJdk0n042hfUpsMnwCWIED/UX-Design-Assignment?type=design&node-id=6-31&t=mN8fWmKeb0aJTuUP-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=6%3A31&mode=design">U X D E S I G N - A S S I G N M E N T </a></p>
     </div>
   </Carousel>
  );
};
export default CarouselComponent
