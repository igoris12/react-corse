import React from 'react'
import Bebras from './Bebras'
function Kvadratas(props) {
    if(props.bebras === 'Brigadir') {
        return (
        <div className="kvadratas br">
            <b><Bebras bebras={props.bebras} /></b>
        </div>
        )
    }
        
    return (
        
        <div className="kvadratas">
            <Bebras bebras={props.bebras} />
        </div>
    )
}

export default Kvadratas
