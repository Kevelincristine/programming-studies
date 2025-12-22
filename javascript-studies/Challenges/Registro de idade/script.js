document.getElementById('confirmar').addEventListener('click', function() {
    let anoNascimento = document.getElementById('nascimento').value;
    let sexoFeminino = document.getElementById('f').checked;
    let sexoMasculino = document.getElementById('m').checked;

    // Ano atual
    let anoAtual = new Date().getFullYear();

    // Validação
    if (anoNascimento === "" || anoNascimento > anoAtual) {
        document.getElementById('resultado').textContent = "Por favor, insira um ano válido.";
        return;
    }

    let idade = anoAtual - anoNascimento;
    let mensagem = "";

    if (sexoFeminino) {
        mensagem = `Você tem ${idade} anos e você é uma menina.`;
    } else if (sexoMasculino) {
        mensagem = `Você tem ${idade} anos e você é um menino.`;
    } else {
        mensagem = `Você tem ${idade} anos. (Sexo não informado)`;
    }

    document.getElementById('resultado').textContent = mensagem;
});
