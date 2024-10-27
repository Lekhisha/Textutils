import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Word from './components/Word';
import Alert from './components/Alert';
/*import ReactDOM from 'react-dom/client';*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode,setmode]=useState('light');
 const [alert,setalert]=useState(null);
 const [showwelcome,setwelcome]=useState(true);

  const showAlert=(message,type)=>{
  setalert({
    msg:message,
    type:type,
  });
 }

 setTimeout(()=>{
   setalert(null);
 },3000);

 const removebodyclasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning-subtle')
  document.body.classList.remove('bg-info-subtle')
  document.body.classList.remove('bg-danger-subtle')
  document.body.classList.remove('bg-success')
 }
const colorpalete=(cls)=>{
  console.log(cls);
  removebodyclasses();
  document.body.classList.add('bg-'+cls)
 
}

useEffect(()=>{
  const timer=setTimeout(()=>{
    setwelcome(false);
  },3000)
  return ()=>clearTimeout(timer);
},[]);

  const togglemode=()=>{
    
    colorpalete();
    if(mode==='light') {
      setmode('dark');
      document.body.style.backgroundColor='#162e50';
      showAlert("dark mode has been enabled",'success');
      /*document.title='Textutils-Dark mode';*/
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled",'success');
      /*document.title='Textutils-light mode';*/
    }
  };
  return (
    <>
   {/*<Navbar title="Textutils" aboutText="About us"/>*/}
   <BrowserRouter>
   <Navbar title="Textutils" mode={mode} togglemode={togglemode} colorpalete={colorpalete}  aboutText="About"/>
   <Alert alert={alert} welcomeuser={showwelcome}/>
   
   <div className="container my-3" >
   {/*<Word showAlert={showAlert} heading="Word converter" mode={mode} />
   <About mode={mode}/>*/}
   <Routes> 
          <Route exact path="/" element={<Word showAlert={showAlert} heading=" Try Textutils - Word counter | character counter" mode={mode} />}/>
          <Route exact path="/About" element={<About mode={mode}/>}/>
    </Routes>
   </div>
   </BrowserRouter>
  
 
    </> 
  );     
}
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/
export default App;
