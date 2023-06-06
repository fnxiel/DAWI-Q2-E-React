import { useState } from "react" //hook o Gancho

export default function Boton({ texto, manejarClick }) {
    return <button className="btn btn-primary" onClick={manejarClick}>{texto}</button>
}

export function BotonGrande({ texto, manejarClick }) {
    return <button type="button" className="btn btn-primary btn-lg" onClick={manejarClick}>{texto}</button>
}

export function BotonPequeno({ texto, manejarClick }) {
    return <button type="button" className="btn btn-primary btn-sm" onClick={manejarClick}>{texto}</button>
}

export function BotonContador() {
    const [valorContador, setValorContador] = useState(0)
    return <>
        <button type="button" className="btn btn-primary"
            onClick={
                () => {
                    setValorContador(valorContador + 1)
                }
            }>{valorContador}</button>
        <input value={valorContador} onChange={(e) => setValorContador(Number(e.target.value))}></input>
    </>

}