let resultados = "";
function pesquisar(pesquisa){
    if (pesquisa !== ""){
        resultados = "";
        let section = document.getElementById('resultados');

        const palavrasChave = pesquisa.split(' ');
    
        let filtrados = dados.filter(item => {
            // Verifica se todos os temas do item incluem alguma das palavras-chave
            return palavrasChave.some(palavra => {
                return item.temas.some(tema => tema.toLowerCase().includes(palavra.toLowerCase()));
            });
        });

        console.log(filtrados);
    
        for (let item of filtrados) {
            criarItem(item.titulo, item.link, item.descricao, item.info);
        }
    
        console.log(palavrasChave, resultados);
    
        section.innerHTML = resultados;
    }
}

function criarItem(titulo, link, descricao, info){
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

const form = document.getElementById('pesquisa');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    const formData = new FormData(form);

    const pesquisa = Object.fromEntries(formData.entries());
    pesquisar(pesquisa.search);
});