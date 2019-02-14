import React, { Component } from 'react';
import Search from '../components/search'

class SearchContainer extends Component {
  state={
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.input.value, 'Submit')
  }
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange= event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }
  // handleChange={this.handleInputChange}
  // value={this.state.value}
  render() {
    return (
      <Search 
        setRef = {this.setInputRef}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchContainer;