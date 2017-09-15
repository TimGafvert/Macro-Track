import React, { Component } from 'react';
import SearchContainer from './SearchContainer'
import logo from './logo.svg';
import ResultItem from './ResultItem'
import './css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props)
    this.enterItem = this.enterItem.bind(this)
    this.state = {
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0
    }
  }

  enterItem(protein, fat, carbs, calories){
    this.setState({
      protein: protein,
      fat: fat,
      carbs: carbs,
      calories: calories
    })
  }
  render() {

    return (
      <div className="Home">

          <h1>Macro Track</h1>
          <div className="macrosContainer">
            <div className="proteinContainer">
              <div>{this.state.protein}</div>
              <div>Protein</div>
            </div>
            <div className="fatContainer">
              <div>{this.state.fat}</div>
              <div>Fat</div>
            </div>
            <div className="carbsContainer">
              <div>{this.state.carbs}</div>
              <div>Carbs</div>
            </div>
            <div className="caloriesContainer">
              <div>{this.state.calories}</div>
              <div>Calories</div>
            </div>
          </div>

          <SearchContainer
          enterItem={this.enterItem}/>

      </div>
    );
  }
}

export default Home;
