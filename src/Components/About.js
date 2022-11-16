import logo from '../Helpers/logo.png'
import './About.css';
import React from 'react';

const About = props => {
    return (
        <div className="container" id="AboutContent"><center>
          <div className="parent">
            <div className="div1">
                <img src={logo} alt="text" id="LogoImg"/>
            </div>
            <div className="div2"> <br></br><br></br>
                New Horizon College of Engineering, Bangalore presents QuantumX-22, a 3-day tech fest and the first one to ever be hosted in the NHCE campus, from 8th-10th December. Over the duration of three days, the fest offers students from all around Bangalore a series of events, from a 24 hour hackathon to a drone race, from hacker series to robo wars. Along with those, a bunch of workshops and guest talks awaits the minds eager to gain knowledge.
                <br></br><br></br><br></br>
                <button type="button" className="btn btn-dark text-light fs-1" id="PassesButton" >Buy Event Passes Now!</button>
            </div>
        </div>
        </center>
    </div>
    );
}

export default About