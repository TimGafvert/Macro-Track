import React, { Component } from 'react';
import './css/ResultItem.css'

class ResultItem extends Component {
  constructor(props) {
    super(props)
    this.enterItem = this.enterItem.bind(this)
    this.state = {
    report: null,
    calories: '',
    protein: '',
    fat: '',
    carbs: ''
    }
  }
  enterItem(protein, fat, carbs, calories) {

    this.props.enterItem(protein, fat, carbs, calories)
    console.log(this.state)
  }


  componentWillMount(){

        this.props.food.getNutrition()
                .then(nutritionReport => {
                  this.setState({
                    report: nutritionReport
                  })
                }).catch(err => {
                    console.log(err)
                })
  }

  render() {
      let result = ''
      let macroNutrients = ''
      let caloriesValue = '', proteinValue = '', fatValue = '', carbsValue = ''
      if (this.state.report === null) {
        result = ''
      } else {
        result = this.state.report

        // console.log(result.nutrients)
        // console.log(result.nutrients[2].value)
        macroNutrients = result.nutrients.filter(function( obj ) {
            return obj.nutrient_id == '208';
      })
        caloriesValue = macroNutrients[0].value
        macroNutrients = result.nutrients.filter(function( obj ) {
            return obj.nutrient_id == '205';
      })
        carbsValue = macroNutrients[0].value
        macroNutrients = result.nutrients.filter(function( obj ) {
            return obj.nutrient_id == '204';
      })
        fatValue = macroNutrients[0].value
        macroNutrients = result.nutrients.filter(function( obj ) {
            return obj.nutrient_id == '203';
      })
        proteinValue = macroNutrients[0].value



      }
      //need to divide the 100g value by the serving size

          return (
            <div className="foodInfo">

              <div>{result.name}</div>
              <div>Calories: {caloriesValue}</div>
              <div>Protein: {proteinValue}</div>
              <div>Fat: {fatValue}</div>
              <div>Carbs: {carbsValue}</div>
              <button onClick={() => this.enterItem(proteinValue, fatValue, carbsValue, caloriesValue)}>Enter Item</button>
            </div>
          )

  }

}
export default ResultItem;
