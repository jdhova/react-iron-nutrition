import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from "./components/FoodBox.jsx"


class App extends Component {
  state = {
      search: "",
      foods : foods,
      // count : getValue
  }
  
  handleChange = (e)=> {
    this.setState({search: e.target.value})  // this helps you target the click target to search
  }

  getStateOfChild = (value) =>{
    console.log("value of item: ", value)
  }

    foodIncrement = ()  =>{
      this.setState({count: this.state.food.getValue + 1}) // how do i check the props to pass that increses  value of food when added
    }

    // we need up uploft state to pass information to the state

    foodHandleIncrement = () => {
      this.foodIncrement({getValue: 1})
    }


  

   render() {
    
    var foodsDisplayed  = this.state.foods.filter( (food) => {
        let foodNameToLowerCase = food.name.toLowerCase();
        let searchName = this.state.search.toLowerCase();
        return (foodNameToLowerCase.includes(searchName))
    })
   
    return (
      <div>
        {/* <button type="button">Add Food!</button> */}
        
        <input onChange={this.handleChange} type="text" name="search" value={this.state.search} ></input>
        <input type="submit" value="Submit"></input>
        {/* <button onClick = {() => this.foodIncrement(getValue)}
         className="field has-addons" </button> */}
          {/* and why do i have 3 return statements */}
    
        { foodsDisplayed.map(food=>{

            return(
              <FoodBox 
               getStateOfChild={this.getStateOfChild}
                food={food}
              />
              );
            })
          }  

     </div> 

    )
  }
}


export default App;


// questions  

// can i do this with one return?
// how do i get an event listner to th utton to update the amount on the screen and 
// it renders the new updated div thats upstate?
// why is foodBox not a compnent? and does that have any efect?










