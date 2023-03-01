import React, { useEffect } from 'react'
import Aos from 'aos'
import "./Banner.css"
import Typewriter from "typewriter-effect"

function Banner() {
  useEffect(()=>{
    Aos.init({offset: 250});
  },[])
  return (
   <>
     <div className='banner'>
     <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <div data-aos-duration="1500" data-aos="fade-right" className='banner-box2'>
             <span className='banner-title1'> Introducing</span> <br />
             <span className='banner-title2'>
             
             
             <Typewriter 
             options={{
               strings : ["Voice Call Service" ,"Voice Call Service"],
               autoStart: true,
               loop:true,
             }}
             />
             
             </span>
             <div className='Banner-1-2'>
                <h1 className='Banner-1-2-title'>Send Voice Call From Your Number without
                using your mobile..</h1>
              </div>
        </div>
        <div className='banner-box1'>
            
            
              <div className='Banner-1-1'>

              </div>
       </div>
     </div>
   </>
  )
}

export default Banner