import React, { Component, Fragment } from "react";
import Select from "react-select";
//import Option from "react-select/dist/declarations/src/components/Option";

export default class ReactSelectCategoria extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: [...new Set(props.products.map(p=>p.categoria))],
      products:  [],
      selectedOption: null,
      updateProducts: props.updateProducts
    }
    console.log(props.products)
  }

  handleChange = selectedOption => {
    fetch('http://localhost:8080/api/productos/categoria/' + selectedOption.value)
    .then(res => res.json())
    .then(res => {this.state.updateProducts(res); console.log(res)})
    .catch(res => console.log(res))
  };


  render() {
    return (
      <Fragment>
        {<Select
          options={this.state.categories.map(function(p){return {value: p, label: p}})}
          onChange={this.handleChange}
          closeMenuOnSelect={false}
        /> }
      </Fragment>
    );
  }
}