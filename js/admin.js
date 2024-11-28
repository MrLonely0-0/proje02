const form = document.getElementById("novo-produto-form");
const produtosAtualizados = document.getElementById("produtos-atualizados");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const preco = document.getElementById("preco").value;
  const imagem = document.getElementById("imagem").value;

  const produtoDiv = document.createElement("div");
  produtoDiv.classList.add("produto");

  produtoDiv.innerHTML = `
    <img src="${imagem}" alt="${nome}">
    <h3>${nome}</h3>
    <p>R$ ${parseFloat(preco).toFixed(2)}</p>
  `;

  produtosAtualizados.appendChild(produtoDiv);
  form.reset();
});
