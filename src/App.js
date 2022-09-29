import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {

  const [Mode, setMode] = useState("light")

  const toggleMode = () => {
    if (Mode === "dark") {
      setMode("light")
      document.body.style.background = "white"
      showAlert("Light mode has been enabled ", "success")

    }
    else {
      setMode("dark")
      document.body.style.background = "grey"
      showAlert("Dark mode has been enabled ", "success")


    }
  }

  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {

      setalert(null)

    }, 1500)

  }

  return (
    <>

      {/* <Router> */}

        <Navbar title="AnalyzeYourText"  mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container mt-3">

          {/* <Routes> */}
            {/* <Route path="/" element={ <Textform showAlert={showAlert} heading="Enter your text below.." mode={Mode} />}> */}
            <Textform showAlert={showAlert} heading="Enter your text below.." mode={Mode} />
             
            {/* </Route> */}
            {/* <Route path="/about" element={ <About mode={Mode} />}> */}
            {/* <About mode={Mode} /> */}
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
