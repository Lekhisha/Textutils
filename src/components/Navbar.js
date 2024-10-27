import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><u>{props.title}</u></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/"><u>Home</u></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/About"><u>{props.aboutText}</u></Link>
          </li>
        </ul>
        {/*<form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>*/}
        <div className="d-flex">
          <label className={`text-${props.mode==='light'?'dark':'light'}`}><u>Color Palete</u></label>
        <div className="bg-warning-subtle mx-2 rounded-5" onClick={()=>{props.colorpalete('warning-subtle')}} style={{height:'30px',width:'30px'}}></div>
        <div className="bg-info-subtle mx-2 rounded-5" onClick={()=>{props.colorpalete('info-subtle')}} style={{height:'30px',width:'30px'}}></div>
        <div className='bg-danger-subtle
         mx-2 rounded-5' onClick={()=>{props.colorpalete('danger-subtle')}} style={{height:'30px',width:'30px'}}></div>
        </div>
       
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.togglemode} type="checkbox" /*role="switch"*/id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><u>dark/light mode</u></label>
        </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
}

