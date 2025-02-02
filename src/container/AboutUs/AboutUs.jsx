import React from 'react';
import './AboutUs.css';
import { images } from '../../constants';
const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon_img" className="spoon__img" />
        <p className="p__opensans">
          the Lorem ipsum text the Lorem ipsum text the Lorem ipsum text
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
      <div className="app__aboutus-content_knife">
        <img src={images.knife} />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon_img" className="spoon__img" />
        <p className="p__opensans">
          the Lorem ipsum text the Lorem ipsum text the Lorem ipsum text
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
    </div>
  </div>
);
export default AboutUs;
