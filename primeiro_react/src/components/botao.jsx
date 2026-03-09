import { useState } from "react"

function Botao() {
    const [ contador, setContador] = useState(0)
    return (
        <>
        <p>Valor: {contador} </p>
        <button onClick={()=> setContador(contador + 1)}>Aumentar</button>
        <button onClick={()=> setContador(contador - 1)}>Diminua</button>
        <button onClick={()=> setContador(contador - contador)}>Zerar</button>
        </>
    )

}

export default Botao