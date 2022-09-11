import React from 'react'
import { NavLink } from 'react-router-dom';
const NavLinks = () => {
  return (<>
  <h2>Home Page</h2>

  <h1> Click on Login Page</h1>
  <NavLink to='/Contact'>Contact</NavLink><br /><br />
  <NavLink to='/About'>About</NavLink><br /><br />
  <NavLink to='/Login'>Login</NavLink><br /><br />
  <NavLink to='/Profile/:input'>Profile</NavLink>
  </>
  )
}

export default NavLinks;
