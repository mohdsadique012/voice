import React, { useEffect } from 'react'
import Aos from 'aos'
import "./Feature.css"
import Image1 from "./image/prompt.png"
import Image2 from "./image/pp1.png"
import Image3 from "./image/pp20-removebg-preview.png"
import Image4 from "./image/pp3.png"
import Image5 from "./image/ppp-removebg-preview.png"
import Image6 from "./image/pp.png"
import Image7 from "./image/image11-removebg-preview.png"

function Feature() {
       useEffect(()=>{
              Aos.init();
            },[])
  return (
<>
<div className='featur'>
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <h1 data-aos="zoom-in" data-aos-duration="1500" className='feature-h1 custom-underline'>FEATURES OF VOICE CALL SERVICE</h1>
    <span data-aos="zoom-in" data-aos-duration="1500" className="fh"></span>
    <div className='feature'>
    <div className='feature-box1'>
         <div data-aos-duration="1500" data-aos="fade-right" className='feature-box11'>
               <span className='f-span'><img className='f-img' src={Image1}/><p className='fp-title'>PROMPT BROADCASTTO  </p>  </span>
               <p className='feature-para'> Drastically reduces the time taken to broadcast a message to the entire target audience.</p>
         </div>
         <div data-aos-duration="1500" data-aos="fade-right" className='feature-box11'>
                <span className='f-span f-middle-left'><img className='f-img' src={Image2}/><p className='fp-title '>TARGET SPECIFIC AUDIENCE </p>  </span>
                <p className='feature-para f-middle-left'>Efficient segregation of target audiences while dealing with various campaigns simultaneously.</p>
         </div>
         <div data-aos-duration="1500" data-aos="fade-right" className='feature-box11'>
                <span className='f-span f-bottom-left'><img className='f-img f-img-1' src={Image3}/><p className='fp-title'>COST-EFFECTIVE MARKETING </p>  </span>
                <p className='feature-para f-bottom-left'> Despite the message inevitably reaching the customers’ ears, voice calls help brands promote at much lower costs than otherwise.</p>
         </div> 
       
    </div>


    <div className='feature-box2'>
        <img className='feature-img'  src={Image7}/>
    </div>


    <div className='feature-box3'>
           <div data-aos-duration="1500" data-aos="fade-left" className='feature-box12'>
               <span className='f-span '> <img className='f-img' src={Image4}/><p className='fp-title fp2'>MORE LIKELY TO BE LISTENED </p>  </span>
               <p className='feature-para '>The on-point message of voice calls has more significant engagements as customers often don't hang up midway.</p>
           </div>
         <div data-aos-duration="1500" data-aos="fade-left" className='feature-box12'>
                <span className='f-span f-middle-right '> <img className='f-img' src={Image5}/><p className='fp-title fp2'>EXCELLENT CALL QUALITY </p>  </span>
                <p className='feature-para f-middle-right'> Unlike traditional calls, voice calls have a much better quality resulting in higher penetration.</p>
         </div>
         <div data-aos-duration="1500" data-aos="fade-left" className='feature-box12'>
                <span className='f-span ftt'> <img className='f-img' src={Image6}/><p className='fp-title fp2'>SEND REMINDERS  </p>  </span>
                <p className='feature-para f-bottom-right '> Reminders sent over voice calls to inform about EMI payments, insurance premiums, bills, and more.</p>
         </div> 
    </div>
</div>
</div>


      
</>
  )
}

export default Feature
