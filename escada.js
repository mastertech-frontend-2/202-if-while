let degraus = Number(prompt('Quantos degraus você gostaria na sua escada?'));
let caracter = prompt('Com qual caracter você gostaria de construir sua escada?');

let escada = '';
let i = 1;

while (i <= degraus) {
    escada += caracter;

    console.log(escada);

    i++;
}