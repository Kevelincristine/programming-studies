import { useState } from "react";

import Item from "./item";
function List(){
    const [tarefa,setTarefa] =
    useState("");
    const [tarefas,setTarefas] = useState<string[]>([]);
    function adicion(){
        if(tarefa.trim() === "")return;

        setTarefas([...tarefas,tarefa]);
        setTarefa("");
    
    }

  function remover(index: number) {
    const novaLista = tarefas.filter((_, i) => i !== index);
    setTarefas(novaLista);
  }
   
    return(
        <>
        <input type="text"
        placeholder="Digite a tarefa"
        value={tarefa}
         onChange={(event)=> setTarefa(event.target.value)} />
         <button onClick={adicion}>
            Adicionar
         </button>
        <ul>
            {tarefas.map((item, index)=>(
               <Item
               key={index}
            texto={item}
            onRemover={() => remover(index)}
               />
            ))}
        </ul>
        </>
        
    );
}
export default List;