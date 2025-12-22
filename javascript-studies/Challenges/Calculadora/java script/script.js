let res;
let boxres = document.getElementById('resultado');

function somar(){
    let n1= Number (document.getElementById('pnum').value);
      let n2= Number (document.getElementById('snum').value);
      res= n1 + n2;
      boxres.innerHTML= `o resultado é ${res}`
}
function subtrair(){
    let n1= Number (document.getElementById('pnum').value);
      let n2= Number (document.getElementById('snum').value);
      res= n1 - n2;
      boxres.innerHTML= `o resultado é ${res}`
}
function multiplicar(){
    let n1= Number (document.getElementById('pnum').value);
      let n2= Number (document.getElementById('snum').value);
      res= n1 * n2;
      boxres.innerHTML= `o resultado é ${res}`
}
function dividir(){
    let n1= Number (document.getElementById('pnum').value);
      let n2= Number (document.getElementById('snum').value);
      res= n1 / n2;
      boxres.innerHTML= `o resultado é ${res}`
}
  
 function limpar(){
    boxres.innerHTML = " ";
 }