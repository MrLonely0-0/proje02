document.addEventListener("DOMContentLoaded", () => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const container = document.getElementById("itens-carrinho");
  
    carrinho.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("produto");
      div.innerHTML = `
        <h3>${item.nome}</h3>
        <p>R$ ${item.preco.toFixed(2)}</p>
      `;
      container.appendChild(div);
    });
  
    document.getElementById("finalizar-compra").addEventListener("click", () => {
      if (carrinho.length > 0) {
        alert("Compra finalizada!");
        localStorage.removeItem("carrinho");
        location.reload();
      } else {
        alert("Seu carrinho está vazio!");
      }
    });
  });
  