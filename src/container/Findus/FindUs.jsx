import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants'
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding ">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">An actual address</p>
        <p
          className="p__opensans"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hour
        </p>
        <p className="p__opensans">Mon - Fri 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun 02:00 am - 03:00 am</p>
        <p className=""></p>
      </div>
      <button className='custom__button' style={{marginTop:"2rem"}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} />
    </div>
  </div>
);

export default FindUs;
