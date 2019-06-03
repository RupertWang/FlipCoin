import React, { Component } from "react";
import Coin from "./Coin";

class FlipCoin extends Component{
    constructor(props){
        super(props);
        this.state={
            numHead : 0,
            numTail: 0,
            head : true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(() => ({head : Math.random() > 0.5}));
        this.setState(prevState => 
            (this.state.head ? {numHead : prevState.numHead + 1} : {numTail : prevState.numTail + 1})
        );
    }
    render(){
        return(
            <div>
                <h1>Coin Flipping</h1>
                <Coin head = {this.state.head}/>
                <p>Head Times: {this.state.numHead}, Tail Times: {this.state.numTail}</p>
                <button onClick = {this.handleClick}>Flip!</button>
            </div>
        )
    }
}

export default FlipCoin