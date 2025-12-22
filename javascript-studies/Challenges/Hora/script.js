var agora = new Date()
var horas = agora.getHours()
var fundo = document.getElementById("imagem")
 var HTMLhora = document.getElementById("Horas")
 HTMLhora.innerHTML = ` Agora são ${horas} horas`
 

 if (horas < 12){
    fundo.style.backgroundImage = "url(imagens/manha.webp)"
   
 }
 else if ( horas < 18)
{
fundo.style.backgroundImage = "url(imagens/tarde.webp)"
}
else {
    fundo.style.backgroundImage = "url(imagens/noite.webp)"
}