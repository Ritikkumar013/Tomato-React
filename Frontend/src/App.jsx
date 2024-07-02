import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { assets } from './assets/assets'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceO from './Pages/PlaceOrder/PlaceO'
import { Routes ,Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'



const App = () => {

  const[showLogin , setShowLogin]=useState(false);
  return (
    <>  
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceO /> } />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
