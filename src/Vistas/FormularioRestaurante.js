import { useState } from "react" //hook o Gancho
import { MensajeCargando } from "../Componentes/MensajeCargando"

export function FormularioRestaurante() {
    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [tipoCocina, setTipoCocina] = useState('')
    const [capacidad, setCapacidad] = useState(0)
    const [cargando, setCargando] = useState(true)

    if (cargando) {
        return <MensajeCargando setCargando={setCargando}></MensajeCargando>
    } else {
        return <div>
            <div>Vamos a crear al restaurante con el nombre: {nombre}</div>
            <div className="mb-3">
                <label for="nombreInput" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombreInput" onChange={(e) => setNombre(e.target.value)} />
            </div>
            <button type="button" className="btn btn-primary">Crear</button>
        </div>
    }

}