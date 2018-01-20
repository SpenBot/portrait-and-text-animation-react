import React, { Component } from 'react';

import './TechnoTronTextBox.css';


class TechnoTronTextBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text1: "I am TechnoTron-4000",
      text2: "human-computer relations.",
      displayText: ""
    }
  }




    componentDidMount() {

      // let splitText = this.state.text1.split("")
      // let textToDisplayArray = []
      //
      // splitText.forEach( (letter) => {
      //   setTimeout( textToDisplayArray.push(letter), 1000 )
      // } )
      //
      // this.setState({textToDisplayString: textToDisplayArray})

      let splitTextArray = this.state.text1.split("")
      console.log("SplitTextArray = " + splitTextArray)
      console.log("SplitTextArray.length = " + splitTextArray.length)


/////////////////// WORKS //////////////////////////
      // let i = 0
      //
      // setInterval( ()=> {
      //   this.setState( { displayText: i } )
      //   i += 1
      //   }, 500 )
////////////////////////////////////////////////////

    let i = 0

    for (i ; i < splitTextArray.length ; i++) {
      setTimeout( ()=> {
        this.setState( { displayText: i } )
        }, 500
      )
    }


      console.log(this.state.displayText)



    }




  render() {


////////////////////////////////////////
    // let text = this.state.text1
    // let splitTextArray = text.split("")
    // let displayText = []
    //
    // let i = 0
    //
    // setInterval( ()=> {
    //   displayText.push(splitTextArray[i])
    //   i += 1
    //   }, 500 )
    //
    // console.log(displayText)

///////////////////////////////////////



    // for(i ; i < this.state.text1.length; i++) {
    //   setTimeout( ()=> displayText.push(splitTextArray[i]), 1000 )
    // }
    //
    // console.log(splitTextArray)

    let newText = this.state.displayText
    console.log("newText : " + newText)

    return (

      <div className="TechnoTronTextBoxDiv">

        <p>{newText}</p>

      </div>

    );
  }
}




export default TechnoTronTextBox;
