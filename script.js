let imagens = [];
let index = 0;

function abrirModal(nome, descricao, imgs) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("titulo").innerText = nome;
  document.getElementById("descricao").innerText = descricao;

  imagens = imgs;
  index = 0;

  renderCarrossel();

  document.getElementById("whatsapp").href =
    "https://wa.me/5511947958699?text=Olá, tenho interesse em " + nome;
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function renderCarrossel() {
  const container = document.getElementById("carousel-container");

  if (!container) return;

  container.innerHTML = `
    <button class="seta esquerda" onclick="anterior()">❮</button>
    <img src="${imagens[index]}" class="imagem-carrossel">
    <button class="seta direita" onclick="proxima()">❯</button>
  `;
}
function proxima() {
  index = (index + 1) % imagens.length;
  renderCarrossel();
}

function anterior() {
  index = (index - 1 + imagens.length) % imagens.length;
  renderCarrossel();
}
let inicio = document.getElementById("btnInicio");
inicio.addEventListener("click", function() {
  window.location.href = "index.html";
});