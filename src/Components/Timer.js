import './Timer.css';
import React from 'react';
const Timer = () => {
    function makeTimer() {

            var endTime = new Date("8 December 2022 9:30:00 GMT+01:00");			
                endTime = (Date.parse(endTime) / 1000);
    
                var now = new Date();
                now = (Date.parse(now) / 1000);
    
                var timeLeft = endTime - now;
    
                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
      
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
                console.log(seconds)
              document.getElementById("days").innerHTML = days;	
              document.getElementById("hours").innerHTML = hours;		
              document.getElementById("minutes").innerHTML = minutes;		
              document.getElementById("seconds").innerHTML = seconds;		
        }
    
        setInterval(function() { makeTimer(); }, 1000);
    return (
        <div className='container'>
            <div id="timer">
                <div className='labelDays'>Days</div>
                <div id="days"></div>
                <div className='labelHours'>Hours</div>
                <div id="hours"></div>
                <div className='labelMins'>Minutes</div>
                <div id="minutes"></div>
                <div className='labelSecs'>Seconds</div>
                <div id="seconds"></div>
                </div>
        </div>
    );
}

export default Timer