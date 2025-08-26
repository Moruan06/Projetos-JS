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
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                        </div>
                    </div>`;
  main.innerHTML += cardHTML;
});

const changeColor = (() => {
  const colorPicker = document.querySelector("#colorPicker");
  
  const getContrastColor = (hexColor) => {
    if (hexColor.startsWith("#")) {
      hexColor = hexColor.slice(1);
    }

    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  }

  colorPicker.addEventListener("input", (e) => {
    document.documentElement.style.setProperty(
      "--backgroundColor",
      e.target.value
    );
    document.documentElement.style.setProperty(
      "--textColor",
      getContrastColor(e.target.value)
    );
  });
})();
