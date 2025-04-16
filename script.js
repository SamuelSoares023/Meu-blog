const posts = [
  {
    titulo: "Primeira Matéria do Blog",
    conteudo: "Essa é a primeira publicação do meu blog incrível. Fique ligado para mais!",
    data: "2025-04-15",
    categoria: "Geral"
  },
  {
    titulo: "Dica do Dia: Aprenda HTML",
    conteudo: "HTML é a base de toda página web. Aprender o básico já é um grande passo.",
    data: "2025-04-16",
    categoria: "Dicas"
  },
  {
    titulo: "Como criar um blog do zero",
    conteudo: "Hoje você vai aprender como montar um blog simples usando apenas o navegador.",
    data: "2025-04-17",
    categoria: "Tutoriais"
  }
];

function exibirPosts() {
  const container = document.getElementById("posts");

  const postsOrdenados = posts.sort((a, b) => new Date(b.data) - new Date(a.data));

  postsOrdenados.forEach(post => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h2>${post.titulo}</h2>
      <p><strong>Categoria:</strong> ${post.categoria}</p>
      <p>${post.conteudo}</p>
      <small>Publicado em: ${post.data}</small>
    `;
    container.appendChild(article);
  });
}

exibirPosts();
