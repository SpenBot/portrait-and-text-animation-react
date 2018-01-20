import React, { Component } from 'react';

import './CommandWindow.css';


class CommandWindow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showCursor: 1
    }
  }


  componentDidMount() {

    let timer = 200

    setInterval( ()=> this.setState({showCursor: this.state.showCursor*= -1}), timer )
  }


  render() {

    let cursor = null

    if(this.state.showCursor > 0) {
      cursor = <p>|</p>
    } else {
      cursor = <p></p>
    }

    return (

      <div className="CommandWindowDiv">

        {cursor}

      </div>

    );
  }
}




export default CommandWindow;
