const produtos = {
    nome: "Pc gamer",
    preco: 4.000,
    emEstoque: true
};
const produtosJSON = JSON.stringify(produtos);
console.log(produtosJSON);

const ProdutosObjetos = JSON.parse(produtosJSON);

console.log(ProdutosObjetos);
