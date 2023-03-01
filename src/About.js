import React, { useEffect } from 'react'
import Aos from 'aos'
import "./About.css"
import Imagelogo from "./image/aboutppp-removebg-preview.png" 
function About() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <div className='about-main'>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
          <div className='img-boxa'>
             <img data-aos-duration="1500" data-aos="fade-right" className='image-about' src={Imagelogo} />
          </div>


          <div data-aos-duration="1500" data-aos="fade-left" className='about'>
          <div className='aboutb1'>
             <h1 className='about-title'>BULK <span className='span'> VOICE CALL SERVICE</span></h1>
             <p className='about-p'>Voice Call services allow mobile marketers to reach out to their clients with an automated, pre-recorded, and on-point business message over integrated voice call applications.
        
             Using technological developments in cloud telephony, voice calls can be sent to the entire target audience with a single click, making the process hassle-free for the business.</p>
      
          </div>
           <div className='about-p-box'>
          
           </div>
           
      
    </div>
      </div>
        
    </>
  )
}

export default About