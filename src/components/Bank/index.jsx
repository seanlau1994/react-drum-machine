import React, { Component } from "react";
import './index.scss'

export default class index extends Component {

  handleCheck = (event) =>{
    const checked = event.target.checked;
    this.props.updateBank(checked);
  }

  render() {
    return (
      <label className="toggle">
        <input type="checkbox" defaultChecked={false} onChange={this.handleCheck}/>
        <span className="slider"/>
        <span className="labels" drum="Drum-kit" piano="Piano"/>
      </label>
    );
  }
}
