import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
      
  const [ChangeText , changeText] = useState('LightMode');
  const [enablemode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const removebodyClasses = ()=>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-secondary');
  }

  const ChangeMode = (cls)=>{
    removebodyClasses();
    document.body.classList.add('bg-'+cls);
  }

  const showAlert = (message , type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setAlert(null)} , 3000);
  }

  const toggleTheme=()=>{
    if(enablemode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert('Dark Mode Enabled','success')
      changeText('Dark Mode');
      // document.title='Textutils-Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light Mode Enabled','success')
      changeText('Light Mode');
      // document.title='Textutils-Light Mode'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils"  Link="href-link" about="About TextUtils" mode={enablemode} toggleMode={toggleTheme} ChangeText={ChangeText} ChangesetMode={ChangeMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>} />      //exact for exact path else partial part
          <Route path="/" element={<TextForm heading="Enter your text here" mode={enablemode} alert={alert} alertMsg = {showAlert}/>} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
