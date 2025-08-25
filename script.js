const main = document.querySelector("main");

const projects = [
  {
    title: "Jogo-da-Velha",
    description: `Clássico Jogo da Velha com placar de "melhor de 3". Construído em JavaScript puro, com a lógica de jogo organizada através de Módulos e Factory Functions.`,
  },
  {
    title: "Livraria",
    description:
      "Biblioteca virtual para catalogar livros com um formulário modal. Feito com JS puro e construtores de objetos, permite adicionar, remover e alterar o status de leitura.",
  }, 
  {
    title: "Calculadora",
    description:
      "Calculadora web com display duplo para histórico e resultados. Possui suporte completo ao teclado, formatação para números grandes (notação científica) e tratamento de erros, como divisão por zero.",
  },
  {
    title: "Sketch",
    description:
      "Sketch Pad interativo construído com JS puro. Possui seletor de cores, ferramentas especiais como os modos Rainbow, Escurecer e Clarear, e um slider dinâmico para ajustar o tamanho do grid.",
  },
  {
    title: "Pedra-Papel-Tesoura",
    description:
      "Clássico Pedra, Papel e Tesoura contra o computador. Um projeto feito em JS puro onde o primeiro a marcar 5 pontos vence.",
  }, 
  {
    title: "Bingo",
    description:
      "Gerador de cartelas de Bingo feito com JS puro. O script cria uma cartela 5x5 válida, com números aleatórios para cada coluna (B, I, N, G, O) e um espaço livre no centro.",
  }, 
];

projects.forEach((project) => {
  const cardHTML = `<div class="card">
                        <div class="image-container">
                        <a href="https://moruan06.github.io/${project.title}/">
                            <img class="Imagem" src="./Screenshots/${
                              project.title
                            }.png" alt="Print do(a) ${project.title}">
                        </a>
                        <button class="play-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>
                        </button>
                        </div>
                        <div class="card-content">
                            <h3 class="title">${project.title}</h3>
                            <p class="description">${project.description}</p>
                            <a href="https://github.com/moruan06/${project.title.toLowerCase()}" class="github-link">
                                <img src="https://pngimg.com/uploads/github/github_PNG58.png" alt="GitHub">
                            </a>
                        </div>
                    </div>`;
  main.innerHTML += cardHTML;
});
