import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');   //Whether dark mode is enabled nor not
  const [alert, setAlert] = useState(null);   // setAlert is to set the value for alert or simply to set this function 

  //  Show alert is the function which will help us to display or show the alert messages by taking 2 inputs => What is the message & 
  // type is of 4 different category in bootstrap. We'll use setAlert to set different kinds of alert
  const showAlert = (message, type) =>{  
    setAlert({
      msg: message,
      type: type // type on left is object & on right is above 1
    }) 
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


    // this will convert the light mode to dark & vice-versa.
  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#39065A';
      showAlert("Dark mode has been enabled", "success");

    } 
    else{
      setmode( 'light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (
    <>
    <Navbar title = "TextUtils" aboutText = "About TextUtils"  mode={mode} toggleMode={toggleMode} />

    {/* const [alert, setAlert] = useState(null); This variable will be passed in the alert below */}
    <Alert alert={alert}/>
    {/* my means margin in y direction */}
    <div className="container my-4"> 
    {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
    <TextForm showAlert={showAlert} heading = "Enter The Text To Analyze"  mode={mode} />
    
    {/* <About/> */}
    
    </div>
 </>
  );
}


export default App;
