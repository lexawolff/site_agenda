const form = document.getElementById('form-agenda');
const imgResidencial = `<img src="./img/telefone.png" alt="emoji residencial" />`;
const imgCelular = `<img src="./img/celular.png" alt="emoji celular" />`;
const nomes = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha (){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const inputTipoContato = document.getElementById('tipo-contato');

    if(nomes.includes(inputNomeContato.value)){
        alert(`O Nome do contato: ${inputNomeContato.value} já foi inserido.`)
    }else{
        nomes.push(inputNomeContato.value);
        numero.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${inputTipoContato.value == 'Residencial' ? imgResidencial : imgCelular}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
        inputNomeContato.value = '';
        inputNumeroContato.value = '';
        inputTipoContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
