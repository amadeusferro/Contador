const btns = document.querySelectorAll('.btn');
const btnsGroup = document.querySelector('.btns');
const containerDois = document.querySelector('.container2');
const containerUm = document.querySelector('.container');
const paragrafo = document.querySelector('.h1');
const inputUm = document.createElement('input');
const h1 = document.createElement('h1');
let operação;

document.addEventListener('click', (e) => {
    const click = e.target;

    if (click.classList.contains('btn-1')) {
        cria('Informe acima a quantidade de bits!', 'números');
        operação = 'numeros'; 
    }
    if (click.classList.contains('btn-2')) {
        cria('Informe acima a quantidade de bits!', 'módulos');
        operação = 'modulos'; 
    }
    if (click.classList.contains('btn-3')) {
        cria('Informe acima a quantidade de módulos!', 'bits');
        operação = 'bits'; 
    }
    if (click.classList.contains('btn-4')) {
        location.reload();
    }
    if (click.classList.contains('btn-5')) {
        calculadora();
    }
});

function cria(texto, type) {
    containerDois.removeChild(btnsGroup);
    containerDois.removeChild(paragrafo);

    inputUm.className = 'display';
    containerDois.appendChild(inputUm);

    const btn5 = document.createElement('button');
    btn5.className = 'btn-5';
    btn5.innerHTML = 'Calcular';
    containerDois.appendChild(btn5);

    h1.innerHTML = texto;
    h1.className = 'h1';
    containerDois.appendChild(h1);

    const btn4 = document.createElement('button');
    btn4.className = 'btn-4';
    btn4.innerHTML = 'Voltar'
    containerDois.appendChild(btn4);

    inputUm.dataset.type = type;

    inputUm.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            calculadora();
        }
    });
}

function calculadora() {
    const type = inputUm.dataset.type;
    const value = inputUm.value;

    if (value % 1 === 0) {
        calcula(type, value);
    } else {
        h1.innerHTML = 'Verifique se você inseriu um número inteiro!';
    }
}

function calcula(tipo, value) {
    if (operação === 'numeros') {
        value = Math.pow(value, 2) - 1;
    } else if (operação === 'modulos') {
        value = Math.pow(value, 2);
    } else if (operação === 'bits') {
        value = Math.ceil(Math.sqrt(value));
    }

    h1.innerHTML = `A quantidade de ${tipo} é de ${value}!`;
    inputUm.value = '';
}
