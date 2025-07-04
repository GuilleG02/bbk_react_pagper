import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.scss'

const Header = () => {
 return (
   <nav className="header">
     <span>Header</span>
     <div>
       <span>
         <Link to="/">Home</Link>
       </span>
       <span>
         <Link to="/contact">Contact</Link>
       </span>
     </div>
   </nav>
 )
}
export default Header