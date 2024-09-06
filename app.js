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
        let filtrados = [];

        for (let palavra of palavrasChave) {
            // Utiliza RegExp para verificar se a palavra-chave encaixa no tema
            const regex = new RegExp('\\b' + palavra + '\\b', 'i');
            dados.filter(item => {
                return item.temas.some(tema => {
                    return regex.test(tema.toLowerCase());
                });
            }).forEach(item => filtrados.push(item)); // Adiciona o item aos resultados caso se encaixe na pesquisa
        }

        // Cria os elementos HTML para cada item filtrado
        for (let item of filtrados) {
            criarItem(item.titulo, item.link, item.descricao);
        };

        // Adiciona os resultados à seção
        section.innerHTML = resultados;

        // Notifica o usuário caso não haja resultados
        if (filtrados.length <= 0) {
            section.innerHTML = `
            <div class="item-resultado">
                <h2>
                    Sem resultados
                </h2>
                <p class="descricao-meta">
                    Foi mal, não temos uma IA que poderia te ajudar. :(
                </p>
            </div>
            `
        }
    }
}

function criarItem(titulo, link, descricao) {
    // Adiciona novos resultados utilizando as informações adquiridas pela função
    resultados += `
    <div class="item-resultado">
        <h2>
            <a href="${link}" target="_blank">${titulo}</a>
        </h2>
        <p class="descricao-meta">
            ${descricao}
        </p>
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