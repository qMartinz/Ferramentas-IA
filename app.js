// Variável global para armazenar os resultados da pesquisa (pode ser melhorada)
let resultados = "";

function pesquisar(pesquisa) {
    // Verifica se a pesquisa não está vazia
    if (pesquisa !== "") {
        // Limpa os resultados anteriores
        resultados = "";

        // Obtém a seção onde os resultados serão exibidos
        const section = document.getElementById('resultados');

        // Divide a pesquisa em palavras-chave
        const palavrasChave = pesquisa.split(' ');

        // Filtra os dados com base nas palavras-chave
        const filtrados = dados.filter(item => {
            // Verifica se algum dos temas do item contém todas as palavras-chave
            return palavrasChave.every(palavra => {
                return item.temas.some(tema => tema.toLowerCase().includes(palavra.toLowerCase()));
            });
        });

        // Limpa a seção de resultados antes de adicionar novos itens
        section.innerHTML = "";

        // Cria os elementos HTML para cada item filtrado
        filtrados.forEach(item => {
            criarItem(item.titulo, item.link, item.descricao, item.info);
        });

        // Adiciona os resultados à seção
        section.innerHTML = resultados;
    }
}

function criarItem(titulo, link, descricao, info){
    // Adiciona novos resultados utilizando as informações adquiridas pela função
    resultados += `
    <div class="item-resultado">
        <h2>
            <a href="${link}" target="_blank">${titulo}</a>
        </h2>
        <p class="descricao-meta">
            ${descricao}
        </p>
        <a href="${info}" target="_blank">Mais informações</a>
    </div>
    `;
}

const form = document.getElementById('pesquisa'); // Formulário de pesquisa

// Realiza a pesquisa ao enviar o formulário
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    const formData = new FormData(form); // Adquire os dados da pesquisa

    const pesquisa = Object.fromEntries(formData.entries());
    pesquisar(pesquisa.search); // Realiza a criação dos resultados
});