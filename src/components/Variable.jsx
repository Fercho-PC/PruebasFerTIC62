import React from 'react'


const saludo = "Hola buenas";
const numero = 5;

function Variable() {
    return (
        <div>
            <h1>{ saludo }</h1>
            <h5>{ numero+numero }</h5>
        </div>
    )
}

export default Variable
