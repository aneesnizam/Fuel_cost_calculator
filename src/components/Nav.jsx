import React from 'react'
import "./nav.css"
import LogoBike from "../assets/images/Logo1.png"
export default function Nav() {
  return (
    <div>
      <nav>
        <div className="left">
       <img src={LogoBike} alt="" />
        </div>
        <div className="right">
         <h5>Fuel Cost Calculator</h5>
        </div>
      </nav>
    </div>
  )
}
