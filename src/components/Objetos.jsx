import React, { Fragment } from 'react'

function Objetos() {
    const pcs = [
        {
            Id:1,
            Tipo:"lagtop",
            procesador:"core i5 7gen",
            memoria:"1Tb SSD",
            Ram:"16gb",
            Grafica:"gtx 2060 4gb",
            info:{
                Marca:"Dell",
                Modelo:"G3",
                Version:"3",
            } ,
            Pantalla:{
                Resolucion:"1920px , 1080px",
            } ,
            
        },
        {
            Id:2,
            Tipo:"lagtop",
            procesador:"core i9 9gen",
            memoria:"1Tb SSD",
            Ram:"16gb",
            Grafica:"gtx 3070 8gb",
            info:{
                Marca:"ROG",
                Modelo:"Sephirus 5",
                Version:"5",
            } ,
            Pantalla:{
                Resolucion:"1920px , 1080px",
            } ,
            
        },
        {
            Id:3,
            Tipo:"lagtop",
            procesador:"core i7 7gen",
            memoria:"1Tb SSD",
            Ram:"16gb",
            Grafica:"gtx 2070 4gb",
            info:{
                Marca:"Acer",
                Modelo:"aspire v5",
                Version:"4",
            } ,
            Pantalla:{
                Resolucion:"1920px , 1080px",
            } ,
            
        }
    ]    
    return (
       
        <Fragment>
            {
                pcs.map((computadoras) => (
                    <div key={computadoras.Id}>
                        <h2>{computadoras.Tipo}</h2>
                        <h3>{computadoras.info.Marca}</h3>
                        <h3>{computadoras.procesador}</h3>
                        <h3>{computadoras.Grafica}</h3>
                        <h3>{computadoras.memoria}</h3>
                        <h3>{computadoras.Ram}</h3>                    
                        
                    </div>
                ))           
            
            }

        </Fragment>
    )
}

export default Objetos
