import React, { Component } from 'react';
import './css/Results.css'
import ResultItem from './ResultItem'

class Results extends Component {
  constructor(props) {
    super(props)
    this.onSearchAgain = this.onSearchAgain.bind(this)
    this.enterItem = this.enterItem.bind(this)
  }

  onSearchAgain() {
    this.props.onSearchAgain()
  }
  enterItem() {
    this.props.enterItem
  }

  // enterItem(protein, fat, carbs, calories){
  //   this.setState({
  //     protein: protein,
  //     fat: fat,
  //     carbs: carbs,
  //     calories: calories
  //   })
  // }

  // enterItem(protein, fat, carbs, calories) {
  //
  //   this.props.enterItem(protein, fat, carbs, calories)
  //   console.log(this.state)
  // }

  render() {
    let {foods} = this.props
    let results = foods.map( (food, index) => {
      return <ResultItem key={ index } food={ food }
      enterItem={this.props.enterItem}/>
    })

    return (
      <div>
        <button onClick={this.onSearchAgain}>Back to Search</button>
        <div className="Results">
          {results}
        </div>
      </div>
    )
  }
}

export default Results;
