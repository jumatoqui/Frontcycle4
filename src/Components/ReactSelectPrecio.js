import React, { Component, Fragment } from "react";
import Select from "react-select";

export default class ReactSelectPrecio extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // Option selected: { value: "150000", label: "150000" }
    console.log("Option selected:", selectedOption);
  };
  render() {
    return (
      <Fragment>
        {/* <Select
          isMulti
          options={options}
          value={this.state.selectedOption}
          onChange={this.handleChange}
          closeMenuOnSelect={false}
        /> */}
      </Fragment>
    );
  }
}