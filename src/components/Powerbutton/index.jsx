import React, { Component } from "react";
import "./index.scss";

export default class index extends Component {
  state = {
    power: "On",
  };

  handleCheck = (event) => {
    const power = event.target.checked;
    this.props.updatePower(power);
    !power ? this.setState({ power: "Off" }) : this.setState({ power: "On" });
  };

  render() {
    return (
      <div>
        <label className="power-switch">
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={this.handleCheck}
            />
            <span className="slider"/>
        </label>
        <p>Power: {this.state.power}</p>
      </div>

    );
  }
}
