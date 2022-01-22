import React from 'react';
import "./hemisphere.css"
import northernPic from "./images/northern.jpg"
import southernPic from "./images/southern.jpg"

const hemispherConfig = {
  Northren: {
    text: "It is Northern Hemisphere",
    picture: northernPic
  },
  Southern: {
    text: "It is Southern Hemisphere",
    picture: southernPic
  }
}

const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0 ? "Northren": "Southern";
    const {text, picture} = hemispherConfig[hemisphere]
    return(
      <div className={hemisphere} >
        <div className='ui raised text container segment'>
          <div className='image'>
            <img src={picture} alt="hemisphere" />
          </div>
          <div className='ui teal bottom attached label'>
            <h1>{ text }</h1>
          </div>
        </div>
      </div>
    )
  }

export default HemisphereDisplay;
