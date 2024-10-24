function calculoTrabalhista() {
    const valorHora = parseFloat(document.getElementById('valorHora').value);
    if (valorHora === 0) return;

    const horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);
    const valeTransporte = document.getElementById('valeTransporte').value.toUpperCase();
    const outrasDeducoes = parseFloat(document.getElementById('outrasDeducoes').value);

    const salarioBruto = valorHora * horasTrabalhadas;
    const descontoINSS = calcularINSS(salarioBruto);
    const descontoIRPF = calcularIRPF(salarioBruto - descontoINSS);
    const descontoVT = valeTransporte === 'S' ? salarioBruto * 0.06 : 0;
    const salarioLiquido = salarioBruto - descontoINSS - descontoIRPF - descontoVT - outrasDeducoes;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h3>Resultado</h3>
        <p>Salário Bruto: R$ ${salarioBruto.toFixed(2)}</p>
        <p>Desconto INSS: R$ ${descontoINSS.toFixed(2)}</p>
        <p>Desconto IRPF: R$ ${descontoIRPF.toFixed(2)}</p>
        <p>Desconto Vale Transporte: R$ ${descontoVT.toFixed(2)}</p>
        <p>Outras Deduções: R$ ${outrasDeducoes.toFixed(2)}</p>
        <p>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</p>
    `;
}

function calcularINSS(salario) {
    let inss = 0;
    if (salario <= 1320.00) {
        inss = salario * 0.075;
    } else if (salario <= 2571.29) {
        inss = 1320.00 * 0.075 + (salario - 1320.00) * 0.09;
    } else if (salario <= 3856.94) {
        inss = 1320.00 * 0.075 + (2571.29 - 1320.00) * 0.09 + (salario - 2571.29) * 0.12;
    } else if (salario <= 7507.49) {
        inss = 1320.00 * 0.075 + (2571.29 - 1320.00) * 0.09 + (3856.94 - 2571.29) * 0.12 + (salario - 3856.94) * 0.14;
    } else {
        inss = 1320.00 * 0.075 + (2571.29 - 1320.00) * 0.09 + (3856.94 - 2571.29) * 0.12 + (7507.49 - 3856.94) * 0.14;
    }
    return inss;
}

function calcularIRPF(baseCalculo) {
    let irpf = 0;
    if (baseCalculo <= 2112.00) {
        irpf = 0;
    } else if (baseCalculo <= 2826.65) {
        irpf = (baseCalculo - 2112.00) * 0.075;
    } else if (baseCalculo <= 3751.06) {
        irpf = (2826.65 - 2112.00) * 0.075 + (baseCalculo - 2826.65) * 0.15;
    } else if (baseCalculo <= 4664.68) {
        irpf = (2826.65 - 2112.00) * 0.075 + (3751.06 - 2826.65) * 0.15 + (baseCalculo - 3751.06) * 0.225;
    } else {
        irpf = (2826.65 - 2112.00) * 0.075 + (3751.06 - 2826.65) * 0.15 + (4664.68 - 3751.06) * 0.225 + (baseCalculo - 4664.68) * 0.275;
    }
    return irpf;
}
function openImage() {
    window.open('images/837.jpg', '_blank');
}


