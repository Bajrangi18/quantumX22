import About from './About'
import Timer from './Timer'
import Events from './Events'
const MainView = props => {
    return (
        <div >
            <About /><br></br><br></br>
            <Timer/><br></br><br></br>
            <Events/>
        </div>
    );
}

export default MainView