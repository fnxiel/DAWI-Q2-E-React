import { useEffect, useState } from "react";
import { Restaurante } from "../Componentes/Restaurante";

export function Restaurantes(){
    const [datos, setDatos]= useState([])
    const [idRestaurante, setIdRestaurante] = useState()

    //useEffect(Funcion, ArregloDependencias)
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            Accept: 'application/json'
          };
          
          if(idRestaurante){ //Estoy buscando por id
            fetch(`http://localhost:3001/api/v1/restaurantes/${idRestaurante}`, requestOptions)
            .then(response => response.json())
            .then(result => setDatos(result))
            .catch(error => console.log('error', error));

          }else{ //Estoy trayendo todos
            fetch("http://localhost:3001/api/v1/restaurantes", requestOptions)
            .then(response => response.json())
            .then(result => setDatos(result))
            .catch(error => console.log('error', error));
          }
    }, [idRestaurante]) ///Codigo se ejecuta cuando cargamos el componente

    const crearRestaurante = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "nombre": "Creado desde la aplicacion",
        "direccion": "En internet",
        "telefono": "8445-2342",
        "tipoCocina": "Hondureña",
        "capacidad": 5
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
        };

        fetch("http://localhost:3001/api/v1/restaurantes", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    if(datos.length < 1){
        return <h2>No se encontraron restaurantes</h2>
    }

    const listadoRestaurantes = datos.map(restaurante => <Restaurante
        key={restaurante.id}
        id={restaurante.id}
        nombre={restaurante.nombre}
        direccion={restaurante.direccion}
        telefono={restaurante.telefono}
        tipoCocina={restaurante.tipoCocina}
        capacidad={restaurante.capacidad}
        ></Restaurante>)

    return (<>
            <label>Id del restaurante a buscar</label>
            <input value={idRestaurante} onChange={(e) => setIdRestaurante(e.target.value)} />
            {listadoRestaurantes}
            <button onClick={() => crearRestaurante()} >Crear restaurante nuevo</button>
            </>
    )
}