function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let inicio = parseInt(document.getElementById("de").value);
    let fim = parseInt(document.getElementById("ate").value);
    let numerosSorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(inicio, fim);

        while(numerosSorteados.includes(numero)){
            numero = gerarNumeroAleatorio(inicio, fim);
        }

        numerosSorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


