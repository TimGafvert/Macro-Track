import React, { Component } from 'react';
import './css/ResultItem.css'

class ResultItem extends Component {
  constructor(props) {
    super(props)
    this.enterItem = this.enterItem.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
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
  }


  componentDidMount(){

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
    let badData = false
      let result = ''
      let macroNutrients = ''
      let caloriesValue = '', proteinValue = '', fatValue = '', carbsValue = ''
      if (this.state.report === null) {
        result = ''
      } else {
        result = this.state.report

        macroNutrients = result.nutrients.filter(function( obj ) {
            return obj.nutrient_id == '208';
      })
      if (macroNutrients[0] === undefined){
        badData = false
      } else {
        caloriesValue = macroNutrients[0].value
        macroNutrients = result.nutrients.filter(function( obj ) {
            return obj.nutrient_id == '205';
      })
        if (macroNutrients[0] === undefined){
          badData = false
        }else{
        carbsValue = macroNutrients[0].value
        macroNutrients = result.nutrients.filter(function( obj ) {
            return obj.nutrient_id == '204';
      })
      if (macroNutrients[0] === undefined){
        badData = false
      }else{
        fatValue = macroNutrients[0].value
        macroNutrients = result.nutrients.filter(function( obj ) {
            return obj.nutrient_id == '203';
      })
      if (macroNutrients[0] === undefined){
        badData = false
      }else{
        proteinValue = macroNutrients[0].value
}
      }}

      }}

      //need to divide the 100g value by the serving size
if (!badData){
          return (

            <div className="foodInfo">

              <div>
              <div className='foodName'>{result.name}</div>
              <div className='macroFact'>Calories: {caloriesValue}</div>
              <div className='macroFact'>Protein: {proteinValue}</div>
              <div className='macroFact'>Fat: {fatValue}</div>
              <div className='macroFact'>Carbs: {carbsValue}</div>
            </div>
            <div>
              <button className='btn' onClick={() => this.enterItem(proteinValue, fatValue, carbsValue, caloriesValue)}>Enter Item</button>
            </div>
          </div>
        )

  }}

}
export default ResultItem;
