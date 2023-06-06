// {
//     "id": 1,
//     "nombre": "Prueba",
//     "direccion": "Direccion",
//     "telefono": "1234-1234",
//     "tipoCocina": "Hondureña",
//     "capacidad": 50
// },

export function Restaurante({id, nombre, direccion, telefono, tipoCocina, capacidad}){
    return <div className="card m-3">
    <h5 className="card-header">{id} - {nombre}</h5>
    <div className="card-body">
      <h5 className="card-title">Especialistas en cocina: {tipoCocina}</h5>
      <p className="card-text">Ubiquenos en: {direccion}.</p>
      <p className="card-text">Telefono: {telefono}.</p>
      <div className="card-footer text-body-secondary">
        Capacidad para: {capacidad}
    </div>
    </div>
  </div>
}