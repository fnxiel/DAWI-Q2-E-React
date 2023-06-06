import logo from './logo.svg';
import './App.css';
import ListadoSaludos from './Vistas/ListadoSaludos';
import {FormularioRestaurante} from './Vistas/FormularioRestaurante'
//import { Restaurante } from './Componentes/Restaurante';
import { Restaurantes } from './Vistas/Restaurantes';
//var Saludo = require('./Saludo');

const datos = [{
  srcImagen: "https://picsum.photos/id/1/300/200",
  titulo: "hola",
  descripcion: "Cuando queremos saludar a alguien",
  textoBoton: "Hola"
},
{
  srcImagen: "https://picsum.photos/id/2/300/200",
  titulo: "Adios",
  descripcion: "Cuando nos queremos despedir",
  textoBoton: "Adios"
},
{
  srcImagen: "https://picsum.photos/id/1/300/200",
  titulo: "hola",
  descripcion: "Cuando queremos saludar a alguien",
  textoBoton: "Hola"
},
{
  srcImagen: "https://picsum.photos/id/2/300/200",
  titulo: "Adios",
  descripcion: "Cuando nos queremos despedir",
  textoBoton: "Adios"
},]

function App() {

  const primerDato = datos[0]

  if(!primerDato.id){
    //id Existe
    console.log(primerDato.id)
  }

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h1>Restaurantes</h1>
          <Restaurantes></Restaurantes>
        </section>
        {/* <section id="CrearRestaurante">
          <h1>Ejemplo de formulario de informacion</h1>
          <h2>Crear un restaurante</h2>
          <FormularioRestaurante />
        </section>
        <hr></hr>
        <section>
          <h1>Ejemplo de listado de componentes</h1>
          <ListadoSaludos datos={datos} />
        </section> */}
      </header>
    </div>
  );
}

export default App;
