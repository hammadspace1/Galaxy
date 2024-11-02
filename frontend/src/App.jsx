import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Admin from './Components/Admin/Admin'
import Login from './Components/Login/Login'
import Edit from './Components/EditPost/Edit'

function App() {

  return (
    <div className=''>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
