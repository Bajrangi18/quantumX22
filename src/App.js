import './App.css';
import MainView from './Components/MainView'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import React,{
  useState
} from "react"; 


function App() {
  var w = window.screen.availWidth;
  if (w>1000){
    return (
      <div className="App">
        <br></br>
        <Navbar/>
        <br></br>
        <MainView />
   
        <br></br>
      </div>
    );
  }else{
    return (
      <div style={{backgroundColor: 'gray', height: '100%'}}>
        <center>
          <h1 style={{marginTop: '50%', color: 'white',fontFamily: 'fantasy'}}>
            KINDLY ACCESS THE WEBSITE THROUGH LAPTOP
          </h1>
        </center>
      </div>
    );
  }
}


export default App;
