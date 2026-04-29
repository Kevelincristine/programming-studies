import { useEffect, useState } from "react";

function Contador(){
    const [contar,setContar] = useState(0);
    useEffect(()=>{
        console.log("Você clicou " + contar + "VEZES!!")},
        [contar]
    );
    return(
        <>
        <button onClick={()=>{setContar(contar + 1)}}>Clicar</button>
        </>
    )
}
export default Contador;