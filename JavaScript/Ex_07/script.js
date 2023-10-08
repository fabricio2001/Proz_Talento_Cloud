document.body.innerHTML += `
    <h1 id="titulo">Bem-vindo ao nosso site!</h1>
    <div class="produto">
        <h2>Nome do Produto</h2>
        <p>Descrição do produto. Este é um ótimo produto!</p>
        <p>Preço: $100</p>
    </div>
`;


// Criando o título
const titulo = document.createElement('h1');
titulo.id = "titulo";
titulo.textContent = "Bem-vindo ao nosso site!";
document.body.appendChild(titulo);

// Criando a div do produto
const divProduto = document.createElement('div');
divProduto.className = "produto";

// Nome do Produto
const nomeProduto = document.createElement('h2');
nomeProduto.textContent = "Nome do Produto";
divProduto.appendChild(nomeProduto);

// Descrição
const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = "Descrição do produto. Este é um ótimo produto!";
divProduto.appendChild(descricaoProduto);

// Preço
const precoProduto = document.createElement('p');
precoProduto.textContent = "Preço: $100";
divProduto.appendChild(precoProduto);

// Adicionando a div do produto ao body
document.body.appendChild(divProduto);
