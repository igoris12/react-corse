import React from 'react'
import Elemnet from '../Componets/Element';

class Stalas extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
    <Elemnet name={'Petras'} surname={'Tested'} per={this.props.per} />
            
    );
  }
}

export default Stalas