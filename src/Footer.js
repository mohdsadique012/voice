import React from 'react'
import Imagee from './image/TDI_LOGO-removebg-preview.png'
import './Footer.css'

function Footer() {
  return (
 <>
    <div className='footer'>
        <div className='foot'>
        <img className='footer-img' src={Imagee} />
        <h1 className='footer-h2'>www.thedegitalindia.in</h1>
        <h2 className='footer-h2'>Contact No : 8751878878 </h2>
        </div>
      
    </div>
 </>
  )
}

export default Footer