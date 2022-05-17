import React, { Component } from "react";
import Spin from "../assets/spinner.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img width={25} src={Spin} alt="Loading..." />
      </div>
    );
  }
}
