import React from 'react'
import logo from "../images/brand_logo.png"
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
    
         
                <img src={logo} alt="" />
              
                  <ul>
                    <li>
                      MENU
                    </li>
                    <li>
                      LOCATION
                    </li>
                    <li>
                      ABOUT
                    </li>
                    <li>
                      CONTACT
                    </li>
                  </ul>

                
            <button>Login</button>
          </div>
     

  )
}

export default Navbar