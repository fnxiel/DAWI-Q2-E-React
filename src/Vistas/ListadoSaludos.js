import Saludo from '../Componentes/Saludo'

function ListadoSaludos({datos}){
    return datos.map(dato => <Saludo 
        srcImagen={dato.srcImagen} 
        titulo={dato.titulo} 
        descripcion={dato.descripcion}
        textoBotonModificar="Modificar"
        textoBotonEliminar="Eliminar"
        eventoEliminar={function (){
          console.log("Eliminando dato...", dato)
        }}
        eventoModificar={function (){
          console.log("Modificando dato...", dato)
        }}
        ></Saludo>)
}

export default ListadoSaludos