import '../Components/DayThree.css';
import React from 'react';

const DayThree = () => {
    return (
        <div className="container-fluid container_daythree text-light">
                <div className="div13"> 9:30AM </div>
                <div className="div23"> 10:30AM</div>
                <div className="div33"> 11:30AM</div>
                <div className="div43"> 12:30PM</div>
                <div className="div53"> 1:30PM</div>
                <div className="div63"> 2:30PM</div>
                <div className="div73"> 3:30PM</div>
                <div className="div83"> 4:30PM</div>
                <div className="div93"> 5:30PM</div>
                <div className="div113"> <center>INTRODUCTION</center></div>
                <div className="div123"> <center>TALKS</center></div>
                <div className="div133"> <center>MANAGEMENT</center></div>
                <div className="div143"> <center>TECHNICAL</center> </div>
                <div className="div153"><center>WORKSHOPS</center> </div>
                <div className="div163" > </div>
                <div className="div173" onMouseOver={() => {document.getElementById("BMM1").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("BMM1").style.opacity="0.0"}}><center><button type="button" class="btn btn-light" id="BMM1">BEST MANAGER</button></center> </div>
                <div className="div183" onMouseOver={() => {document.getElementById("EXH").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("EXH").style.opacity="0.0"}}><center><button type="button" class="btn btn-light" id="EXH">EXHIBITION</button></center> </div>
                <div className="div193" onMouseOver={() => {document.getElementById("HCKEND").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("HCKEND").style.opacity="0.0"}}><center><button type="button" class="btn btn-light" id="HCKEND">HACK END</button></center> </div>
                <div className="div203" onMouseOver={() => {document.getElementById("DSW").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("DSW").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="DSW">DATA SCIENCE WORKSHOP</button></center></div>
                <div className="div213" onMouseOver={() => {document.getElementById("CCP").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("CCP").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="CCP">CLOSING CEREMONY & PRIZE DISTRIBUTION</button></center></div>
        </div>
    );
}
export default DayThree