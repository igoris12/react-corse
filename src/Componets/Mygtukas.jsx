import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Mygtukas extends Component {
    constructor() {
        super();
        this.state = {counter: 0};
    }

    activateLasera =() => {
        
        console.log(`${this.props.text} works`);
        
    }
    
    counter() {
                this.setState((state, props) => ({
                counter: state.counter + 1
                }));
    }



    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
           
            <button className='but' onClick={this.counter} >
                {this.props.text} {this.state.counter}
            </button>
        
        )
    }
}
