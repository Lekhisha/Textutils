import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Word from './components/Word';
import Alert from './components/Alert';
/*import ReactDOM from 'react-dom/client';*/
/*import { BrowserRouter, Routes, Route } from 'react-router-dom';*/

function App() {
  const [mode,setmode]=useState('light')
 const [alert,setalert]=useState(null);

 const showAlert=(message,type)=>{
  setalert({
    msg:message,
    type:type,
  })
 }
 setTimeout(()=>{
  setalert(null);

 },2000);
  
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#162e50';
      showAlert("dark mode has been enabled",'success');
      document.title='Textutils-Dark mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled",'success');
      document.title='Textutils-light mode';
    }
  }
  return (
    <>
   {/*<Navbar title="Textutils" aboutText="About us"/>*/}
   {/*<BrowserRouter>*/}
   <Navbar title="Textutils" mode={mode} togglemode={togglemode} aboutText="About"/>
   <Alert alert={alert}/>
   
   <div className="container my-3" >
   <Word showAlert={showAlert} heading="Word converter" mode={mode} />
   {/*<Routes> 
          <Route path="/" element={<Word showAlert={showAlert} heading="Word converter" mode={mode} />}/>
          <Route path="/About" element={<About />}/>
    </Routes>*/}
   </div>
   {/*</BrowserRouter>*/}
  
 
    </> 
  );     
}
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/
export default App;
