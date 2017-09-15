import React, { Component } from 'react';
import Search from './Search'
import Results from './Results'
import { queryAPI } from './Utils'
import NutritionFacts from 'nutrition-facts'
import './css/Home.css'

const NF = new NutritionFacts('2tfyS0SOtiFEdchD5rL0rX7LWeK6PggxCUpccKDs');

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.onSubmitQuery = this.onSubmitQuery.bind(this)
    this.onSearchAgain = this.onSearchAgain.bind(this)
    this.enterItem = this.enterItem.bind(this)
    this.state = {
      query: '',
      hasSearched: false,
      foods: []
    }
  }

  handleSearchInput(searchText) {
    this.setState({query: searchText})
  }

enterItem() {
  this.props.enterItem
}

onSubmitQuery(searchText) {
  var listItems = []

  NF.searchFoods({
    q: searchText,
    ds: 'Standard Reference'
  }).then(results => {
    listItems.push(...results.list.item)
    NF.searchFoods({
      q: searchText,
      ds: 'Branded Food Products'
    }).then(results => {
      listItems.push(...results.list.item)
      this.setState({
        hasSearched: true,
        foods: listItems
    })
  })
})
}


  onSearchAgain() {
    this.setState({
      hasSearched: false,
      query: ''
    })
  }

  render() {
    return (
      <div className="SearchContainer">
          {
            this.state.hasSearched ?
            <Results className='SearchContainer'
              foods={this.state.foods}
              onSearchAgain={this.onSearchAgain}
              enterItem={this.props.enterItem}
            />
            :
            <Search
              handleSearchInput={this.handleSearchInput}
              onSubmitQuery={this.onSubmitQuery}
              query={this.state.query}
            />
          }
      </div>
    );
  }
}

export default SearchContainer;
