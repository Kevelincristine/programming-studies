
import { useState } from "react";

 function Desafio01(){

  const [num, setNum]= useState<number>(5);

return <><p>Número:{num}</p>
<button onClick={() => setNum(num > 0 ? num - 1 : 0)}>
    Diminuir Número 
</button>
</>
}

export default Desafio01;   