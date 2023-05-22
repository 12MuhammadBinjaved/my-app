// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

// import About from './Components/About';
import { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   link,
// } from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light'); // whther dark mode is enabled or not

  const toggleMode = ()=>{

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }



  return (
    <>

      {/* <Router> */}

          <Navbar title = "Haseeb Javed" mode = {mode} toggleMode = {toggleMode}/> 
          
          <div className="container my-3">

          <Textform heading = 'Enter the text to analyze' mode = {mode}/>

          

          {/* <Routes>

            <Route exact path="/home" element={<Textform heading = 'Enter the text to analyze' mode = {mode}/>}/>
              
          
            <Route exact path="/about" element={<About/>}/>
              
          
          </Routes>
           */}
  
          </div>
      
      {/* </Router>  */}
         
    </>
  );
}

export default App;
