import React, { Component } from 'react';
import SearchContainer from './SearchContainer'
import logo from './logo.svg';
import ResultItem from './ResultItem'
import './css/Home.css';
let proteinArray = [0]
let fatArray = [0]
let carbsArray = [0]
let caloriesArray = [0]
let sumProtein
let sumFat
let sumCarbs
let sumCalories

class Home extends Component {
  constructor(props) {
    super(props)
    this.enterItem = this.enterItem.bind(this)
    this.calculateMacroSum = this.calculateMacroSum.bind(this)
    this.resetDay = this.resetDay.bind(this)
    this.updateState = this.updateState.bind(this)
    this.removeLastItem = this.removeLastItem.bind(this)
    this.state = {
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0
    }
  }

  calculateMacroSum(){
    sumProtein = proteinArray.reduce((a, b) => a + b, 0)
    sumFat = fatArray.reduce((a, b) => a + b, 0)
    sumCarbs = carbsArray.reduce((a, b) => a + b, 0)
    sumCalories = caloriesArray.reduce((a, b) => a + b, 0)
  }

  resetDay(){
    proteinArray = [0]
    fatArray = [0]
    carbsArray = [0]
    caloriesArray = [0]
    this.updateState()
  }

  updateState(){
    this.calculateMacroSum()
    this.setState({
      protein: sumProtein,
      fat: sumFat,
      carbs: sumCarbs,
      calories: sumCalories
    })
}

  removeLastItem(){
    proteinArray.pop()
    fatArray.pop()
    carbsArray.pop()
    caloriesArray.pop()
    console.log(proteinArray)
    this.updateState()

  }

  enterItem(protein, fat, carbs, calories){
    proteinArray.push(parseFloat(protein))
    fatArray.push(parseFloat(fat))
    carbsArray.push(parseFloat(carbs))
    caloriesArray.push(parseFloat(calories))
    this.updateState()
  }
  render() {

    return (

      <div className="Home">
        <div>
          <img className='logo' src={require('./images/MacroTrackLogo.png')} />
        </div>
          <div className="macrosContainer">
            <div className="proteinContainer">
              <div>{this.state.protein.toFixed(2)}</div>
              <div>Protein</div>
            </div>
            <div className="fatContainer">
              <div>{this.state.fat.toFixed(2)}</div>
              <div>Fat</div>
            </div>
            <div className="carbsContainer">
              <div>{this.state.carbs.toFixed(2)}</div>
              <div>Carbs</div>
            </div>
            <div className="caloriesContainer">
              <div>{this.state.calories.toFixed(2)}</div>
              <div>Calories</div>
            </div>
          </div>

          <div className='searchContainer'>
          <button className='btn' onClick={this.resetDay}>Start New Day</button>
          <button className='btn' onClick={this.removeLastItem}>Undo</button>
          </div>
          <div className='searchContainer'>
          <SearchContainer
          enterItem={this.enterItem}/>

        </div>
      </div>
    );
  }
}

export default Home;
