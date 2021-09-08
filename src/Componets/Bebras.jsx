
import React, { Component } from 'react'

export class Bebras extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }
 
    componentDidMount() {
        console.log('works');
            this.timerID = setInterval(this.tick,1000);
        }

    tick = () => {
            this.setState({date: new Date()}) 
            }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                  <span>{this.props.bebras}</span>
                  <hr/>
                  <h3>{this.state.date.toLocaleTimeString()}</h3>

            </div>
        )
    }
}

export default Bebras

