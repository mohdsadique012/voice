import React from "react";
import "./Price.css";
import Imge from "./image/checkbox-removebg-preview.png"
function Price() {
  return (
    <>
      <div className="plan_section1">
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <h1 data-aos="zoom-in" data-aos-duration="1500" className="price-credit">CREDIT VOICE PLAN</h1>
        <div className="plan_section ">
          <div
            className="plans pl1"
            data-aos="fade-right"
            data-aos-duration="1500"
          
          >
            <img
              src="image/3207949_40855-removebg-preview.png"
              alt=""
              className="plan_img"
            />
            <h2 className="tagh">10,000 Credit Voice Plan</h2>

            <div className="price">
              <span className="first_tag "></span>
              <br />
              <br />
              <span className="secoend_tag ">Rs. 3,000/-*</span>
            </div>
            <div className="price-dis">
              <p className="pricep"><img className="pimg" src={Imge} /> Voice Duration: 27 Sec.</p>

              <p className="pricep"><img className="pimg" src={Imge} />Instant Delivery </p>
              <p className="pricep"> <img className="pimg" src={Imge} />Validity – 1 Year or Depends on Volume</p>
              <p className="pricep"><img className="pimg" src={Imge} />Free Unlimited Support </p>
            </div>
          </div>
          <div
            className="plans pl2"
            data-aos="fade-up"
            data-aos-duration="1500"
     
          >
            <img
              src="image/3207949_40855-removebg-preview.png"
              alt=""
              className="plan_img"
            />
            <h2 className="tagh">50,000 Credit Voice Plan</h2>

            <div className="price">
              <span className="first_tag "></span>
              <span className="secoend_tag ">Rs. 14,000/-*</span>
            </div>
            <div className="price-dis">
              <p className="pricep"><img className="pimg" src={Imge} /> Voice Duration: 27 Sec.</p>

              <p className="pricep"><img className="pimg" src={Imge} />Instant Delivery </p>
              <p className="pricep"><img className="pimg" src={Imge} /> Validity – 1 Year or Depends on Volume</p>
              <p className="pricep"><img className="pimg" src={Imge} />Free Unlimited Support </p>
            </div>
          </div>
          <div
            className="plans pl3"
            data-aos="fade-left"
            data-aos-duration="1500"
          
          >
            <img
              src="image/3207949_40855-removebg-preview.png"
              alt=""
              className="plan_img"
            />
            <h2 className="tagh">1 Lac Credit Voice Plan</h2>

            <div className="price">
              <span className="first_tag "></span>
              <br />
              <br />
              <span className="secoend_tag ">Rs. 27000/-*</span>
            </div>
            <div className="price-dis">
              <p className="pricep"><img className="pimg" src={Imge} /> Voice Duration: 27 Sec.</p>

              <p className="pricep"><img className="pimg" src={Imge} />Instant Delivery </p>
              <p className="pricep"> <img className="pimg" src={Imge} />Validity – 1 Year or Depends on Volume</p>
              <p className="pricep"><img className="pimg" src={Imge} />Free Unlimited Support </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
