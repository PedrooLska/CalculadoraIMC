class calculadoraIMC {
    constructor() {
        this.peso = document.querySelector('.peso');
        this.altura = document.querySelector('.altura'); 
    }

    calcularIMC() {
        let peso = this.peso.value;
        let altura = this.altura.value;

        const IMC = peso / Math.pow(this.converterAltura(altura), 2)

      this.resultText(IMC.toFixed(1));
    }

    converterAltura(altura) {
        return altura.slice(0, 1) + '.' + altura.slice(1, 3);
    } 

    resultText(resultText) {
        let el = document.querySelector('.resultado');
        el.innerHTML = resultText;
    }
}

const newCalculadoraIMC = new calculadoraIMC();