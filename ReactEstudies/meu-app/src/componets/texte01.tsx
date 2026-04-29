import {useState} from "react"

function app(){
    const [contador,setContador] = useState(0)
    return (
      <div>
        <h1>{contador}</h1>
        <button onClick={ () => setContador((valorAtual) => valorAtual + 1) }>somar</button>
      </div>
    )
}