console.log(dados)

for (let index = 0; index < dados.length; index++) {
    const item = dados[index];

    criarItem(item.titulo, item.link, item.descricao, item.info);
}

function criarItem(titulo, link, descricao, info){
    var div = document.createElement('div');
    div.classList.add('item-resultado');

    var h2 = document.createElement('h2');
    var linkh2 = document.createElement('a');
    linkh2.href = link;
    h2.append(linkh2);
    linkh2.textContent = titulo;

    var p = document.createElement('p');
    p.textContent = descricao;

    var linkinfo = document.createElement('a');
    linkinfo.href = info;
    linkinfo.textContent = 'Mais informações';

    div.append(h2);
    div.append(p);
    div.append(linkinfo);
    document.querySelector('.resultados-pesquisa').append(div);
}

const form = document.getElementById('pesquisa');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    const formData = new FormData(form);

    const pesquisa = Object.fromEntries(formData.entries());
    console.log(pesquisa);
});