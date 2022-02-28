import React, { Component } from "react";
import Header from './components/Header';
import Keypad from './components/Keypad';
import Powerbutton from './components/Powerbutton';
import Display from './components/Display';
import Volume from './components/Volume';
import Bank from './components/Bank';
import {bankOne,bankTwo} from './drum_bank'

import "./App.scss";

export default class App extends Component {
  state = {
    bank: bankOne,
    power: true,
    display: 'I am display',
    volume: 0.5
  }

  addDisplay = (info) => {
    this.setState({display:info})
  }

  updatePower = (power) =>{
    this.setState({power})
  }

  updateBank = (checked) =>{
    checked ? this.setState({bank: bankTwo}): this.setState({bank: bankOne})
    checked ? this.addDisplay('Piano') : this.addDisplay('Drum-kit')
  }

  updateVolume = (volume) =>{
    this.setState({volume})
  }

  render() {
    const {bank, power, display} = this.state;
    return (
      <div id="drum-machine" className="wrapper">
        <Header/>
        <Keypad {...this.state} addDisplay={this.addDisplay}/>
        <div className="dash-wrapper">
          <Powerbutton updatePower={this.updatePower}/>
          <Display display={display}/>
          <Volume updateVolume={this.updateVolume}/>
          <br/>
          <Bank updateBank={this.updateBank}/>
        </div>
      </div>
    );
  }
}
