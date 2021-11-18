import React, { Component, Fragment } from "react";
import Select from "react-select";

export default class ReactSelectNombre extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // Option selected: { value: "MAPOCALIPSIS", label: "MAPOCALIPSIS" }
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