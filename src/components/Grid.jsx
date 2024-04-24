import React from "react";
import GridLayout from "react-grid-layout";
import profilePicture from "../images/profile-picture.jpg"

const Grid = () => {
	return (
	<GridLayout className="layout" cols={10} rowHeight={25} width={1300} isDraggable={false}>
		<div key="one" data-grid={{ x: 0, y: 2, w: 5, h: 0, static: true }}>
            <div className="container-side">
			<h3>SKILLS</h3>
            <br />
                <h4>CODE</h4>
                    <p>HTML 5</p>
                    <p>CSS</p>
					<p>JavaScript</p>
                    <p>React</p>
					<p>Redux</p>
                    <p>TypeScript</p>
					<p>Node.js</p>
			<br/>
                 <h4>TOOLBOX</h4>
				    <p>Adobe Photoshop</p>
					<p>GIMP</p>
                    <p>Figma</p>
                    <p>Canva</p>
			<br/>
                <h4>EDUCATION</h4>
                    <p>FrontEnd-developing</p>
                    <p>2023 - Currently l KYH</p>
			<br/>
			        <p>Bartending</p>
                    <p>Nov 2013 l EBS Stockholm</p>
			<br/>
			        <p>Social studies / - IT</p>
                    <p>2010 - 2013 l IT-Gymnasiet</p>
            </div>
		</div>
        <div key="two" data-grid={{ x: 2, y: 2, w: 7, h: 4 }}>
            <h3>ABOUT ME</h3>
                <p className="abouttext">
					Currently attending education for frontend-development, with the hopes of soon exploring this exciting line of work.
					In highschool I was taught the very basics of HTML and CSS, and the interest for coding has followed me ever since.
					As an ambitious and driven person with previous experiences of leadership and teamwork,
					I understand that the way to success consists of good communication, creating good relations and actively nurturing these.
					Lets build something extrordinary together!
                </p>
        </div>
        <div key="three" data-grid={{ x: 2, y: 2, w: 4, h: 10 }}>
            <h3>WORK EXPERIENCE</h3>
            <br />
                <h5 className="side">DEPARTMENT HEAD l SVENSK HEMLEVERANS </h5>
                    <p className="abouttext">Full Time-Employment l Jan 2021 - July 2023 l Uppsala</p>
            <br />
                <h5 className="side">TRAFFIC CONTROLLER l UPPSALA TAXI </h5>
                    <p className="abouttext">Full Time-Employment l May 2019 - Dec 2020 l Uppsala</p>
            <br />
                <h5 className="side">RESTAURANGCHEF l KITCHEN AND TABLE, NORDIC CHOICE</h5>
                    <p className="abouttext">Full Time-Employment l April 2017 - May 2019 l Arlanda Airport</p>
            <br />
                <h5 className="side">RECEPTIONS/BEMANNINGSANSVARIG l HOTELL CENTRALSTATION</h5>
                    <p className="abouttext">Full Time-Employment l Jan 2016 - April 2017 l Uppsala</p>
            <br />
                <h5 className="side">TEAMLEADER/BARCHEF l SCANINAVIAN SERVICE PARTNER</h5>
                    <p className="abouttext">Full Time-Employment l May 2014 - Jan 2016 l Arlanda Airport</p>
            <br />
                <h5 className="side">BARTENDER/CROUPIER l Stöten Ski Resort</h5>
                    <p className="abouttext">Seasonal employment l Dec 2013 - April 2014</p>
            <br />
          </div>
		  <div key="four" data-grid={{ x: 8, y: 2, w: 4, h: 1 }}>
			<img src={profilePicture} alt="profilepicture" className="grid-pic"/>
		  </div>
        </GridLayout>

		  );
};

export default Grid;