import React from 'react'
import { useState } from 'react'
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import ProjectPage from './components/ProjectPage'
import Contact from './components/Contact'
import './components/App.css'

function App() {


  return (
    <div className='app'>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
    
  )
}

export default App
