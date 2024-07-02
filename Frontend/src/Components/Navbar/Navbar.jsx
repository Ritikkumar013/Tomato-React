import React, { useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu , setMenu] = useState("Home");
const{getTotalCartAmount}=useContext(StoreContext);
  return (
  
    <div className="navbar">
     <Link to='/' > <img src={assets.logo} alt="" className='logo'/> </Link>
       
       <ul className='nav-menu'>
    <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
    <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
    <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
    <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
    </ul>

    <div className='nav-right'>   <img src={assets.search_icon} /> 
    <div className='nav-search-ic'>
        <Link to='/cart'><img src={assets.basket_icon} /></Link>
        <div className={getTotalCartAmount()===0?"": 'dot'}> </div>
    </div>
    <button onClick={()=>setShowLogin(true)}>Sign-in</button>
    </div>
    </div>
    
  )
}

export default Navbar;
