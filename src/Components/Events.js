import './Events.css'
import DayOne from "../Components/DayOne"
import DayTwo from "../Components/DayTwo"
import DayThree from "../Components/DayThree"
import React from 'react';

const Events = () => {
   
    return (
        <div className='container-fluid' id="EventCard"><center><div className='eventLab'> Our Events</div>
        </center>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-inner">
             <div className="carousel-item active">
             <center><p style={{fontSize:'2.5rem'}}>Day 1 08/12/2022</p></center>
             <DayOne/>
             </div>
             <div className="carousel-item">
                <center><p style={{fontSize:'2.5rem'}}>Day 2 09/12/2022</p></center>
             <DayTwo/>
             </div>
             <div className="carousel-item">
                <center><p style={{fontSize:'2.5rem'}}>Day 3 10/12/2022</p></center>
             <DayThree/>
             </div>
         </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Previous</span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
         </button>
         </div>
        </div>
        
    );
}

export default Events