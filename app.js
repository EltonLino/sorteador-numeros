function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let inicio = parseInt(document.getElementById("de").value);
    let fim = parseInt(document.getElementById("ate").value);
    let numerosSorteados = [];
    let numero;

    if (inicio > fim) {
        alert('Valor inicial deve ser menor que o valor final')
    } else if (quantidade > (fim - inicio)) {
        alert("Quantidades de numeros solicitados é maior que o intervalo entre número inicial e final")
    } else {


        for (let i = 0; i < quantidade; i++) {
            numero = gerarNumeroAleatorio(inicio, fim);

            while (numerosSorteados.includes(numero)) {
                numero = gerarNumeroAleatorio(inicio, fim);
            }

            numerosSorteados.push(numero);
            alterarStatusDoBotao();
        }

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;
    }
}


function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusDoBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusDoBotao();
}