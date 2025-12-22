let num = document.getElementById("num1")
let lista = document.getElementById("res")
let res= document.getElementById("resultado")
let mylist = []

function Nnumero(n){
   return Number(n) >= 1 && Number(n) <= 100
}
function Lnumero( n,l ){
    return(l.indexOf(Number(n)) != -1)
      
    }


function adicionar(){
    if ( Nnumero(num.value) && !Lnumero(num.value, mylist)){
      mylist.push(Number(num.value))
      let item = document.createElement("option")
    item.text = ` Valor ${num.value} adicionado`
    lista.appendChild(item)
    } else {
        alert("Valor invalido ou já encontrado!")
    }
    num.value = ""
    num.focus()
}
function finalisar(){
  if (mylist.length === 0 ){
    alert("adicione valores antes de finalizar!") }else {
        let nc =    mylist.length
        let maior = mylist[0]
        let menor = mylist[0]
    for( let pos in mylist){
      
        if (mylist[pos]> maior)
        maior = mylist[pos]
        if( mylist[pos]< menor)
            menor = mylist[pos]
    }

        res.innerHTML = ""
        res.innerHTML += ` <p> Ao todo temos ${nc} números cadastrados </p>`
         res.innerHTML += ` <p> Maior valor informado foi ${maior} </p>`
          res.innerHTML += ` <p> menor valor informado foi ${menor} </p>`
          
    }
    }

  
