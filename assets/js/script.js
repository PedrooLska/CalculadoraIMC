const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const resultado = document.querySelector('#resultado');

const calculadoraIMC = () => {
    let pesoValue = peso.value;
    let alturaValue = altura.value;
    const IMC = Number(pesoValue) / Math.pow(converterAltura(alturaValue), 2)
    resultadoTexto(IMC.toFixed(1));
}

const converterAltura = (altura) => {
    return altura.slice(0, 1) + '.' + altura.slice(1, 3);
}

const resultadoTexto = (resultText) => {
    resultado.innerHTML = resultText;
}