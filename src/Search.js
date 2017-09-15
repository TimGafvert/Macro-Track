import React, { Component } from 'react';
import './css/Home.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.onSubmitQuery = this.onSubmitQuery.bind(this)
  }

  handleSearchInput(e){
    this.props.handleSearchInput(e.target.value)
  }

  onSubmitQuery(e){
    e.preventDefault()
    this.props.onSubmitQuery(this.props.query)
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.onSubmitQuery}>
          <input className='searchBox'
            type='text'
            placeholder='Enter a food item'
            value={this.props.query}
            onChange={this.handleSearchInput} />
          <button className='btn' type='submit'>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
