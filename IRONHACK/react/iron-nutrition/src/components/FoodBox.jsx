
import React, {Component} from 'react';



class FoodBox extends Component { 

    constructor(props){
        super(props);
        this.state = {
            value:0
        }
    }
    getValue (e) {
        
        this.setState({value:e.target.value})
        this.props.getStateOfChild(this.state.value);
    }

    // changeValue = e =>{
    //     value = e.target.value
    //         props.
    // }
render() {
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                    <img src={this.props.food.image}/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                         <p> <strong>{this.props.food.name}</strong> <br /> <small>{this.props.food.calories} cal</small> </p>
                     </div>

                </div>
                <div className="media-right">
                     <div className="field has-addons">
                        <div className="control"> <input className="input" type="number" value={this.state.value} onChange={ e => this.getValue(e)}/> </div>
                    </div>
                    <div className="control">
                        <button className="button is-info">+</button>
                     </div>
                 </div>
     
            </article>
        </div>
    );
}
}

 


export default FoodBox;