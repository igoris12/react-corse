import React from 'react'
import Mygtukas from './Mygtukas';

const data = ['Sausk', 'Spaudinek', 'Click'];

function App() {

    return (
        <>
            {data.map((b, i) => <Mygtukas text={b} key={i}/>
            )}
        </>
    )
}

export default App


