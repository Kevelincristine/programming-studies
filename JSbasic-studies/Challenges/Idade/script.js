function idade() { 
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById("nas")
    let res = document.getElementById("res")

    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Tente novamente!")
    } else {
        var fsex = document.getElementsByName("sexo")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img") // CORRIGIDO
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "uma mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "imagens/fcrianca.webp")
            } else if (idade < 21) {
                img.setAttribute("src", "imagens/fadolecente.webp")
            } else if (idade < 50) {
                img.setAttribute("src", "imagens/fadulto.webp")
            } else {
                img.setAttribute("src", "imagens/fvelho.webp")
            }
        } else if (fsex[1].checked) {
            genero = "um homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "imagens/mcrianca.webp")
            } else if (idade < 21) {
                img.setAttribute("src", "imagens/madolecente.webp")
            } else if (idade < 50) {
                img.setAttribute("src", "imagens/madulto.webp")
            } else {
                img.setAttribute("src", "imagens/mvelho.webp")
            }
        }
        
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
