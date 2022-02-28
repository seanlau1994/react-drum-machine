import React, { Component } from "react";
import './index.scss'

export default class index extends Component {

  handleChange = (event) =>{
    const volume = event.target.value / 100;
    this.props.updateVolume(volume);
  }

  render() {
    return (
      <div className="volume-wrapper"> 
        <label>Volume :</label>&nbsp;
        <input type="range" id="volume" name="volume" min={0} max={100} onChange={this.handleChange}/>
      </div>
    );
  }
}
