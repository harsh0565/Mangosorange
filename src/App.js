import React from 'react'
import Navbar from './components/Navbar'
import Temples from './components/Temples'
import './App.css'
const App = () => {
  return (
    <div className='background'>
      <Navbar/>
      <marquee direction="right" behavior="alternate" scrollamount="25"><h1 className='m-4 text-info heading'>Religious Places</h1></marquee>
      <Temples/>
          
    </div>
  )
}

export default App
