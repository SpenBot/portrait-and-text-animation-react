import React, { Component } from 'react';

import TechnoTronPortraitBox from '../TechnoTronPortraitBox/TechnoTronPortraitBox.js';
import TechnoTronTextBox from '../TechnoTronTextBox/TechnoTronTextBox.js';

import './TechnoTronAll.css';



class TechnoTronAll extends Component {

  render() {

    return (

      <div className="TechnoTronAllDiv">

        <TechnoTronPortraitBox />
        <TechnoTronTextBox />

      </div>

    );
  }
}




export default TechnoTronAll;
