function Evento({numero}) {

    function meuEvento() {
        console.log(`Opa, foi disparado!" ${numero}`)
    }
    
    return (
        <div>
            <p>Clique para disparar evento:</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento