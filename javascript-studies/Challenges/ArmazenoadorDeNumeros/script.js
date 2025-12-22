let mylist =[]

function adicionar(){
  let num = document.getElementById("num1")
  let res = document.getElementById("res")
  let n = Number(num.value)
  if( num.value.length === 0 || n > 100){
   alert("[ERRO] Número invalido!")
  } if(mylist.includes(n)) {
    alert("[ERRO] Este número já foi adicionada na lista!")
  }
   else { 
     
     mylist.push(n)
     let item = document.createElement("option")
     item.text = `valor ${n}`
     item.value = `tab${n}`
     res.appendChild(item)
  }
}
function resultado(){
   let resultado = document.getElementById("resultado")
    let menor = Math.min(...mylist)
    let maior = Math.max(...mylist)
    resultado.innerHTML = ` O menor número é ${menor}`
    resultado.innerHTML += ` O maior número é ${maior}`


}