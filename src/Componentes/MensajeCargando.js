export function MensajeCargando({setCargando}) {
    return <>
        <div>Cargando informacion por favor espere....</div>
        <button type="button" className="btn btn-primary" onClick={() => setCargando(false)}>Terminar de cargar</button>
    </>
}