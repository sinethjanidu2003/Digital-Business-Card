import { useState } from 'react'
import userLogo from './assets/user.png'

import Section  from './components/section';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css'


/*
Digital Business Card - React Project
*/

function App() {


  return (
    <div className="card">
      <img src={userLogo} className='userImg'/>
      <div className='card-body'>
      <Header/>
      <Section/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
