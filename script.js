const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;
let tentativasAnteriores = [];
let jogoConcluido = false;
function verificarTentativa() {
    if (jogoConcluido) {
        alert("O jogo já foi concluído. Clique em 'F5' para jogar novamente.");
        return;
    }

    const tentativa = parseInt(document.getElementById("tentativa").value);

    if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        return;
    }

    if (tentativasAnteriores.includes(tentativa)) {
        alert("Você já tentou esse número. Tente outro!");
        return;
    }

    tentativasRestantes--;

    if (tentativa === numeroAleatorio) {
        exibirResultado("Parabéns! Você acertou o número!");
        jogoConcluido = true;
    } else if (tentativasRestantes === 0) {
        exibirResultado(`Acabaram as tentativas. O número correto era ${numeroAleatorio}. Tente novamente!`);
        jogoConcluido = true;
    } else {
        const dica = tentativa < numeroAleatorio ? "maior" : "menor";
        exibirResultado(`Tente novamente. O número correto é ${dica} do que ${tentativa}. `);
    }

    tentativasAnteriores.push(tentativa);
    exibirHistorico(tentativa);
    document.getElementById("tentativasRestantes").innerText = tentativasRestantes;
    document.getElementById("tentativa").value = "";
}

function exibirResultado(mensagem) {
    document.getElementById("resultado").innerText = mensagem;
}

function exibirHistorico(tentativa) {
    const historicoDiv = document.getElementById("historico");
    const historicoItem = document.createElement("li");
    historicoItem.innerText = `- ${tentativa}`;
    historicoDiv.appendChild(historicoItem);
}
