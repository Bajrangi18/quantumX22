import { useState } from 'react';
import '../Components/DayOne.css';
import React from 'react';

const DayOne = () => {
    
    return (
        <div className="container-fluid container_dayone text-light">
                <div className="div11"> 9:30AM</div>
                <div className="div21"> 10:30AM</div>
                <div className="div31"> 11:30AM</div>
                <div className="div41"> 12:30PM</div>
                <div className="div51"> 1:30PM</div>
                <div className="div61"> 2:30PM</div>
                <div className="div71"> 3:30PM</div>
                <div className="div81"> 4:30PM</div>
                <div className="div91"> 5:30PM</div>
                <div className="div101"> <center>INTRODUCTION</center></div>
                <div className="div111"> <center>TALKS</center></div>
                <div className="div121"> <center>MANAGEMENT</center></div>
                <div className="div131"> <center>TECHNICAL</center> </div>
                <div className="div141"> <center>WORKSHOPS</center> </div>
                <div className="div151" onMouseOver={() => {document.getElementById("ING001").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("ING001").style.opacity="0.0"}}><center><button type="button" class="btn btn-light" id="ING001">INAUGRATION</button></center> </div>
                <div className="div161" onMouseOver={() => {document.getElementById("GT001").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("GT001").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="GT001">GUEST TALK</button></center></div>
                <div className="div171" onMouseOver={() => {document.getElementById("PIT001").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("PIT001").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="PIT001">IDEAS2FUND</button></center></div>
                <div className="div181" > <center><button type="button" class="btn btn-light" id="PIT001">IDEAS2FUND</button></center></div>
                <div className="div191" onMouseOver={() => {document.getElementById("IDE001").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("IDE001").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="IDE001">IDEASTORM</button></center></div>
                <div className="div201" > <center><button type="button" class="btn btn-light" id="IDE001">IDEASTORM</button></center></div>
                <div className="div211" onMouseOver={() => {document.getElementById("CM001").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("CM001").style.opacity="0.0"}}><center><button type="button" class="btn btn-light" id="CM001"> CURIOUS MINDS</button></center> </div>
                <div className="div221" onMouseOver={() => {document.getElementById("DRC001").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("DRC001").style.opacity="0.0"}}><center><button type="button" class="btn btn-light" id="DRC001">DRONE RACE</button></center> </div>
                <div className="div231" onMouseOver={() => {document.getElementById("FS001").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("FS001").style.opacity="0.0"}}><center><button type="button" class="btn btn-light" id="FS001">FAST SERVICE</button></center> </div>
                <div className="div241" onMouseOver={() => {document.getElementById("CB001").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("CB001").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="CB001">CHATBOT DEVELOPMENT</button></center></div>
                <div className="div251" onMouseOver={() => {document.getElementById("CRC001").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("CRC001").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="CRC001">CHEMICAL ROCKETRY</button></center></div>
                <div className="div261" onMouseOver={() => {document.getElementById("CRC001").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("CRC001").style.opacity="0.0"}}><center><button type="button" class="btn btn-light" id="CRC001">CHEMICAL ROCKETRY</button></center> </div>
                <div className="div271" onMouseOver={() => {document.getElementById("HCK001").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("HCK001").style.opacity="0.0"}}><center><button type="button" class="btn btn-light" id="HCK001">HACKER SERIES</button></center> </div>
                <div className="div281" onMouseOver={() => {document.getElementById("RBS001").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("RBS001").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="RBS001">ROBO SOCCER</button></center></div>
        </div>
    );
}

export default DayOne


// but1 = inaugration
// but2 = inaugrationTalkc