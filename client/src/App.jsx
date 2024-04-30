import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './componenets/Header'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
