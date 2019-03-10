import React, { Component } from 'react'
import { Scrambler, Cycler } from "react-text-scrambler";

export default class Scrable extends Component {
  render() {
    const strings = ["Freelancer", "Web Designer", "Fullstack Developer"];
    const characters = "!<>-{}/[]?=";
    return (
        <Cycler
        renderIn={200}
        duration={ 4000 }
        typewriter={false}
        characters={ characters }
        strings={ strings } />
    )
  }
}
