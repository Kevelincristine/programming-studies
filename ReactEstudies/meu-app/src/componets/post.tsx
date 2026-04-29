import {  useEffect, useState,} from "react";

export function Post(){

  const[user,setUser] = useState([])
  const[carregando,setCarregando] = useState(true)
  const[erro,setErro]  = useState<string>("")

  useEffect(()=>{
     async function depois(){
       try {
         const resp = await fetch("https://jsonplaceholder.typicode.com/users")
         if(!resp.ok)
           throw new Error("Não foi possível carregar os dados")
       

      const dados= await resp.json()
      setUser(dados)
}
     catch (err){
        setErro("Erro desconhecido")
     }
     finally{
        setCarregando(false)
     }
      }
      depois()
  },[])
 return(
  <div>
    {carregando && <p>Carregando...</p>}
    {erro && <p>Erro: {erro}</p>}
    {!carregando && !erro && (
      <ul>
        {user.map((u: any) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    )}
  </div>
 )
}
export default Post