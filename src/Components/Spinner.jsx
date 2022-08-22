import React, { Component } from "react";
import loding from "./Loader.gif";

export default class Spinner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mt-4">
          <img src={loding} className="spinnerSize " alt="Loding" />
        </div>

        {/* <div
          class="spinner-border"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
        <div
          class="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div> */}
      </React.Fragment>
    );
  }
}
