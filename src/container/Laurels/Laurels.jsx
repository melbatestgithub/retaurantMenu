import React from 'react';
import { SubHeading } from '../../components';
import {images,data} from '../../constants'
import './Laurels.css';
const AwardList = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurel-award_card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurel-award_card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__cormorant">
        {subtitle}
      </p>
    </div>
  </div>
);
const Laurels = () => (
  <div className='app__bg app__wrapper section__padding ' id="awards">
    <div className='app__wrapper_info'>
    <SubHeading title="Awards and Recognition"/>
    <h1 className='headtext__cormorant'>Our Laurels</h1>
    <div className='app__laurels_info'>
        {data.awards.map((award)=> <AwardList award={award} key={award.title} /> )}
    </div>
    </div>
    <div className='app__wrapper_img'>
    <img src={images.laurels}/>
    </div>
  </div>
);
export default Laurels;
