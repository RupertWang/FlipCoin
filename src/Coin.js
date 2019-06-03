import React, { Component } from "react";

class Coin extends Component{
    render(){
        return(
            <div>
                {this.props.head ? <img src = "https://tinyurl.com/react-coin-heads-jpg"></img> : <img src = "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"></img>}
            </div>
        )
    }
}

export default Coin