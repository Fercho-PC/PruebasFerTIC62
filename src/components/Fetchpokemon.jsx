import React from 'react'

function Fetchpokemon() {
    const [pokemon, setPokemon] = React.useState([]);
    const obtenerpokemones = async () => {
        
        console.log("Hola")
        const res=await fetch("https://pokeapi.co/api/v2/pokemon/")
        const datos=await res.json()
        setPokemon(datos.results)
        console.log(datos)
    }

    return (
        <div>
            <table className="table">
                <tr>
                    <th >Nombre</th>
                    <th >URL</th>
                </tr>
                {
                pokemon.map((Poke, index)=>(
                <tr key={index}>
                    <td scope="row">{Poke.name}</td>
                    <td scope="row"><a href="{Poke.url}">pagina</a></td>
                </tr>
                ))
            }
            </table>                            
            <button onClick={()=>obtenerpokemones()}>as</button>
        </div>
    )
}

export default Fetchpokemon
