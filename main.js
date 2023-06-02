const form = document.getElementById ('form-contato');
const nomes = []
let linhas = '';

form.addEventListener ('submit', function(e) {
    e.preventDefault ();

    adicionaLinha ();
    atualizaTabela ();

});

function adicionaLinha () {
    const inputNomeContato = document.getElementById ('nome-contato');
    const inputNumeroContato = document.getElementById ('numero-contato');

    if (nomes.includes (inputNomeContato.value)){
        alert( `O nome: ${inputNomeContato.value} já foi adicionado.`);
    } else {

    nomes.push(inputNomeContato.value);

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;

    linha += `<td>`;

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = ''; 
}

function atualizaTabela () {
    const corpotabela = document.querySelector ('tbody');
    corpotabela.innerHTML = linhas;
    console.log (nome);
}