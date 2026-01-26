function buscaDados(){
    fetch("url")
    .then(res => res.json())
    .then(dado => console.log(dado));    // com then e catch
}
async function buscadado() {
    const resposta = await fetch("url"); // espera o pacote chegar
    const dados = await resposta.json() // esperar converter o JSON
    console.log(dados);
}

async function exibirPikachu (){
    try{
        
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const dados = await resposta.json();
    
    console.log(dados.name);
    }   
    catch(erro){
     console.error("erro na busca:", erro);
    }
    
}