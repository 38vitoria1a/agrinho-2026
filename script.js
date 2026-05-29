function calcularDiagnostico() {
    // Obtendo os valores dos campos
    const areaTotal = parseFloat(document.getElementById('area').value);
    const areaReserva = parseFloat(document.getElementById('reserva').value);
    const tipoIrrigacao = document.getElementById('irrigacao').value;

    // Validação simples
    if (isNaN(areaTotal) || isNaN(areaReserva) || areaTotal <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    if (areaReserva > areaTotal) {
        alert("A área de reserva não pode ser maior que a área total da propriedade.");
        return;
    }

    // Lógica do cálculo de sustentabilidade
    const percentualReserva = (areaReserva / areaTotal) * 100;
    let pontuacaoSustentavel = 0;
    let mensagemDica = "";

    // Avaliação da reserva (Código Florestal varia, mas usamos 20% como base geral de exemplo)
    if (percentualReserva >= 20) {
        pontuacaoSustentavel += 50;
        mensagemDica += "<p class='alerta-verde'>✓ Excelente! Sua propriedade cumpre ou supera a meta geral de 20% de Reserva Legal.</p>";
    } else {
        mensagemDica += "<p class='alerta-laranja'>⚠ Atenção: Sua área de preservação está abaixo de 20%. Considere projetos de reflorestamento ou ILPF para recomposição.</p>";
    }

    // Avaliação da irrigação
    if (tipoIrrigacao === "eficiente") {
        pontuacaoSustentavel += 50;
        mensagemDica += "<p class='alerta-verde'>✓ O sistema de irrigação por gotejamento/microaspersão evita o desperdício de recursos hídricos.</p>";
    } else if (tipoIrrigacao === "moderado") {
        pontuacaoSustentavel += 30;
        mensagemDica += "<p class='alerta-laranja'>⚠ O sistema de aspersão comum é funcional, mas monitorar a evaporação do solo pode otimizar o uso da água.</p>";
    } else {
        pontuacaoSustentavel += 10;
        mensagemDica += "<p class='alerta-laranja'>⚠ Sistemas por inundação geram grande perda de água. Mudar para sistemas controlados fortalece o futuro sustentável.</p>";
    }

    // Exibição dos resultados
    const resultadoDiv = document.getElementById('resultado-conteudo');
    resultadoDiv.innerHTML = `
        <p><strong>Percentual de Conservação:</strong> ${percentualReserva.toFixed(1)}% da propriedade.</p>
        <p><strong>Pontuação de Equilíbrio:</strong> ${pontuacaoSustentavel} / 100 pontos.</p>
        <hr>
        <h4>Recomendações para o Futuro:</h4>
        ${mensagemDica}
    `;

    // Alternar visibilidade das telas
    document.getElementById('calc-form').reset();
    document.querySelector('.card:first-child').classList.add('hidden');
    document.getElementById('resultado').classList.remove('hidden');
}

function reiniciar() {
    document.querySelector('.card:first-child').classList.remove('hidden');
    document.getElementById('resultado').classList.add('hidden');
}