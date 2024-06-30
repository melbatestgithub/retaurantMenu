import React from 'react';
import './Header.css';
import { SubHeading } from '../../components';
import {images} from '../../constants'
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="This is the dynamic title" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        the lorem ipsum text of the paragraphp
      </p>
      <button type="button" className='custom__button'>Explore more</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header image"/>
    </div>
  </div>
);

export default Header;
