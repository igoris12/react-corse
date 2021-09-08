import React from 'react'
import Kvadratas from './Kvadratas'

const data = ['Rudasis', 'Juodasis', 'Brigadir'];

function App() {

    return (
        <div>
            {data.map((b, i) => <Kvadratas bebras={b} key={i}/>
            )}
           
        </div>
    )
}

export default App


