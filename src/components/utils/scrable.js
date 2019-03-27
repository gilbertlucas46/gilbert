import React, { Component } from 'react'
import { Cycler } from "react-text-scrambler";

export default class Scrable extends Component {
  render() {
    const strings = ["Freelancer", "Web Designer", "Fullstack Developer"];
    const characters = "!<>-{}/[]?=";
    return (
        <Cycler
        renderIn={1000}
        duration={ 4000 }
        characters={ characters }
        strings={ strings } />
    )
  }
}
