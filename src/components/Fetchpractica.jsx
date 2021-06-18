import React from 'react'

function Fetchpractica() {

    const [pokemon, setPokemon] = React.useState([]);
    const obtenerpokemones = async () => {
        
        console.log("Hola")
        const res2=await fetch("https://pokeapi.co/api/v2/pokemon/3/")
        const datos=await res2.json()
        setPokemon(datos.abilities)    
        console.log(datos) 

    }
    return (
        <div>

            <table className="table">
                <tr>
                    <th>Nombre</th>                   
                </tr>
                {
                pokemon.map((Poke, index)=>(
                <tr key={index}>
                    <td scope="row">{Poke.ability.name}</td>                   

                </tr>
                ))
            }

            </table>              
            <button onClick={()=>obtenerpokemones()}>as</button>
        </div>
    )
}

export default Fetchpractica
