import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import DashBoard from './pages/DashBoard'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/signin" element = {<SignIn />}/>
        <Route path = "/signup" element = {<SignUp />}/>
        <Route path = "/dashboard" element = {<DashBoard />}/>
        <Route path = "/projects" element = {<Projects />}/>
      </Routes>
    </BrowserRouter>
  )
}
