import { useState } from "react";
function Github(){
  interface Usuario{
    login: string;
    name?: string;
    avatar_url: string;
    bio?: string;
  }
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<Usuario | null>(null);
  const[carregando, setCarregando] = useState(false);
  const[erro, setErro] = useState("");
  async function Pesquisar(){
    if(!username) return;
    setCarregando(true);
    setErro("");
    setUserData(null);
    try{
      const resposta = await fetch(`https://api.github.com/users/${username}`);
      if(!resposta.ok){
        throw new Error("Usuário não encontrado");
      }
      const dados: Usuario = await resposta.json();
      setUserData(dados);
    }catch(err){
      setErro("Erro ao buscar usúario")
    }
    finally{
      setCarregando(false);
    }

  }

  return(
    <>
    <p>Escreva um nome de usuário do GitHub:</p>
    <input type="text" placeholder="Ex:Kevelincristine" value={username} onChange={(e)=>setUsername(e.target.value)}
     />
     <button onClick={Pesquisar}>Buscar</button>
     {carregando && <p>Carregando...</p>}
     {erro && <p>{erro}</p>}
     <br />
      {userData && (
        
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.name || userData.login}</h2>
          {userData.bio && <p>{userData.bio || "Sem bio disponível"}</p>}
        </div>
      )}


    </>
  )
}
export default Github;