import React, { Component } from "react";
import './index.scss'

export default class index extends Component {
  render() {
    const {display} = this.props
    return (
      <div className="display" id="display">
        <h3>{display}</h3>
      </div>
    );
  }
}
