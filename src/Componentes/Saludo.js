//export
//import
import {BotonGrande, BotonPequeno, BotonContador} from "./Botones"
import Boton from "./Botones"

function Saludo({titulo, descripcion, textoBotonModificar, textoBotonEliminar, srcImagen, eventoModificar, eventoEliminar}) {

    //estados en react
    return <div className="card my-3" style={{ width: "18rem" }}>
        <img src={srcImagen} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <button onClick={eventoModificar} type="button" className="btn btn-primary">{textoBotonModificar}</button>
            <button onClick={eventoEliminar} type="button" className="btn btn-primary">{textoBotonEliminar}</button>
            <BotonGrande texto="Export normal"/>
            <BotonPequeno texto="Export normal"/>
            <Boton texto="Export Default"/>
            <BotonContador/>
            
        </div>
    </div>
    //Retornar codigo JSX
}

function construirSaludo(primerNombre, segundoNombre){
    return `${primerNombre} ${segundoNombre}`
}

//module.exports = Saludo

export default Saludo