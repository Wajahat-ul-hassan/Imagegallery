import React from "react";
import "./App.css";
// import Card from 'react-bootstrap/Card'

class Card2 extends React.Component{
    render(){
        return(
          <div className="root">
            <div className="maincard">
            <img src={this.props.value.img}/>
            <h2>{this.props.value.RS}</h2>
            <p>{this.props.value.Des}</p>
            
            </div>
          </div>
        )
    }
}


export default Card2;