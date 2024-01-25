import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Reset from './pages/auth/Reset'


const App = () => {
  return (
    <>
      {/* Creating Main page Browser and route */}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/reset' element={<Reset/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App