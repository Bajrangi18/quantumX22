import '../Components/DayTwo.css';
import React from 'react';

const DayTwo = () => {
    return (
        <div className="container-fluid container_daytwo text-light">
            <div className="div12">  9:30AM</div>
            <div className="div22"> 10:30AM</div>
            <div className="div32"> 11:30AM</div>
            <div className="div42"> 12:30PM</div>
            <div className="div52"> 1:30PM</div>
            <div className="div62"> 2:30PM</div>
            <div className="div72"> 3:30PM</div>
            <div className="div82"> 4:30PM</div>
            <div className="div92"> 5:30PM</div>
            <div className="div102"> <center>INTRODUCTION</center></div>
            <div className="div112"> <center>INTRODUCTION</center></div>
            <div className="div122"> <center>MANAGEMENT</center></div>
            <div className="div132"> <center>TECHNICAL</center></div>
            <div className="div142"> <center>WORKSHOPS</center> </div>
            <div className="div152"> <center></center></div>
            <div className="div162" onMouseOver={() => {document.getElementById("CPC").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("CPC").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="CPC">CHAI PE CHARCHA</button></center></div>
            <div className="div172" onMouseOver={() => {document.getElementById("MCK").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("MCK").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="MCK">MOCK STOCK</button></center></div>
            <div className="div182" onMouseOver={() => {document.getElementById("BMM").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("BMM").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="BMM">BEST MANAGER</button></center></div>
            <div className="div192" onMouseOver={() => {document.getElementById("BMM").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("BMM").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="BMM">BEST MANAGER</button></center></div>
            <div className="div202" onMouseOver={() => {document.getElementById("HCK").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("HCK").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="HCK">HACKATHON</button></center></div>
            <div className="div212" onMouseOver={() => {document.getElementById("RCR").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("RCR").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="RCR">RC RACE</button></center></div>
            <div className="div222" onMouseOver={() => {document.getElementById("RBW").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("RBW").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="RBW">ROBO WARS</button></center></div>
            <div className="div232" onMouseOver={() => {document.getElementById("ETH").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("ETH").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="ETH">ETHICAL HACKING</button></center></div>
            <div className="div242" onMouseOver={() => {document.getElementById("CAN").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("CAN").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="CAN">CANSAT</button></center></div>
            <div className="div252" onMouseOver={() => {document.getElementById("ARD").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("ARD").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="ARD">ARDUINO</button></center></div>
            <div className="div262" onMouseOver={() => {document.getElementById("LIFT").style.opacity="1.0"}} onMouseLeave={() => {document.getElementById("LIFT").style.opacity="0.0"}}> <center><button type="button" class="btn btn-light" id="LIFT">LIFT OFF</button></center></div>
        </div>
    );
}
export default DayTwo