import About from './About'
import Timer from './Timer'
import Events from './Events'
import Contact from './Contact'
import React from 'react';

const MainView = props => {
    
    return (
        <div >
            <About /><br></br><br></br>
            <Timer/><br></br><br></br>
            <Events/><br></br>
            <Contact />
        </div>
    );
}

export default MainView