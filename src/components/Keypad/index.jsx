import React, { Component } from "react";
import "./index.scss";

export default class index extends Component {
  //declare the clickToPlay method
  clickToPlay = (event) => {
    const {power,volume,addDisplay} = this.props;
    const { target } = event;
    // if not power on, return nothing
    if (!power) {
      alert("Pleaes Power On first");
      return;
    }
    // if power is true, play the audio
    if (power) {
      const audio = target.children[0];
      const info = target.name;
      audio.play();
      audio.volume = volume;
      audio.currentTime = 0;
      addDisplay(info);
    }
  };

  hintToPlay = (event) => {
    const { power,volume,addDisplay } = this.props;
    const { keyCode } = event;
    const keyCodeArray = [81, 87, 69, 65, 83, 68, 90, 88, 67];
    // if not power on, return nothing
    if (!power) {
      alert("Pleaes Power On first");
      return;
    }
    // if power is true, play the audio
    if (power && keyCodeArray.includes(keyCode)) {
      const sound = document.getElementById(keyCode).children[0];
      const info = sound.parentElement.name;
      sound.play();
      sound.volume = volume;
      sound.currentTime = 0;
      addDisplay(info);
    }
  };

  componentDidMount(){
    document.addEventListener("keydown", this.hintToPlay);
  }

  render() {
    const { bank } = this.props;
    return (
      <div className="keys">
        {bank.map((cap) => {
          return (
            <button
              onClick={this.clickToPlay}
              key={cap.keyCode}
              name={cap.id}
              id={cap.keyCode}
              className="drum-pad"
            >
              <audio src={cap.url} id={cap.keyTrigger} className="clip" />
              {cap.keyTrigger}
            </button>
          );
        })}
      </div>
    );
  }
}
