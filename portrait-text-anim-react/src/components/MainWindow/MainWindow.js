import React, { Component } from 'react';

import TechnoTronAll from "../TechnoTronAll/TechnoTronAll.js"
import CommandWindow from "../CommandWindow/CommandWindow.js"

import './MainWindow.css';


class MainWindow extends Component {

  render() {

    return (

      <div className="MainWindowDiv">

        <TechnoTronAll />
        <CommandWindow />

      </div>

    );
  }
}




export default MainWindow;
