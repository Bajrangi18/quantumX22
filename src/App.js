import './App.css';
import MainView from './Components/MainView'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import {
  useState
} from "react"; 


function App() {
  

  return (
    <div className="App">
      <br></br>
      <Navbar/>
      <br></br>
      <MainView />
      {/* <Contact/> */}
      <br></br>
    </div>
  );
}


export default App;
