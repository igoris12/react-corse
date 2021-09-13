import React, { Component } from 'react'
import Button from './Button';

export default class Mygtukas extends Component {
    constructor() {
        super();
       this.state = {color: 'green'}
    }

    changeColor = () => {
        this.setState({color: (this.state.color == 'green') ? 'red' : "green"})
    }
 
    render() {
        return (
           <div className='but' style= {{backgroundColor: this.state.color}} >
            <Button colorChanger={this.changeColor} />
           </div>
        )
    }
}
