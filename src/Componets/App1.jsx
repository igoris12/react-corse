import React from 'react'
import Elemnet from './Element';
import Stalas from './Stalas'

function App(props) {
    return (
        <>
       <Elemnet name={'Petras'} surname={'Tested'} per={props.per} />
       <Stalas per={props.per} />
        </>
    )
}

export default App
