function tabuada(){
   let num = document.getElementById("num1")
   let res = document.getElementById("res")
   if ( num.value.length === 0){
     alert("[ERRO] Coloque um número valido")
   } else {
      let n = Number(num.value)
      res.innerHTML = "";
    let c = 1
    while ( c <= 10){
        let item = document.createElement("option")
        item.innerHTML = (`${n} x ${c} = ${n*c}`)
        res.appendChild(item)
        c++
    }
      }
    }
   
