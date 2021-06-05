import React, { Fragment } from 'react'

function Eventos() {
const [saludo, setSaludo] = React.useState("Hola")

    const cambiarEstado = () => {
        console.log("Diste clic")
        setSaludo("Hola fernando")
    }

    return (
        <Fragment>
            { saludo }
            <button onClick={() => cambiarEstado()}>Hoals</button>
        </Fragment>
    )
}

export default Eventos
/**/