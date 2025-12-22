function contar() {
   let inicio = document.getElementById("num1")
   let fim = document.getElementById("num2")
   let pulos = document.getElementById("num3")
   let res = document.getElementById("res")
   if ( inicio.value.length === 0 || fim.value.length === 0 || pulos.value.length === 0){
     window.alert("[ERRO] algo não foi preenchido.")
   } else {
     let i = Number(inicio.value)
     let f = Number(fim.value)
     let p = Number(pulos.value)
      if( p <= 0 ){
        window.alert("Valor de passos invalido! passos valera 1 agora.")
        p = 1
     } if(i<=f){
     for(let c = i; c<=f;c+=p){
        res.innerHTML += `${c} &#128073;`
     }
   } else {
     {
        for(let c =i;c>=f;c-=p){
            res.innerHTML += `${c} &#128073;`
        }
     }
    
   }
    res.innerHTML += "&#127937;"
}
}