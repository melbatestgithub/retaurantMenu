import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title=" Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content-qoute">
          <img src={images.quote} />
          <p className="p__opensans">Lorem ipsum qoute lorem ipsum qoute</p>
        </div>
        <p className="p__opensans">
          The qoute content to be defined The qoute content to be defined The
          qoute content to be defined The qoute content to be defined
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
