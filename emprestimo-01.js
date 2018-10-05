let idade = prompt ('Qual sua idade?');
let renda = prompt('Agora nos diga, por favor, qual sua renda?');
let emprestimo = prompt('E quanto você gostaria de pegar emprestado?');

if (idade >= 25 && idade <= 65 && renda >= 1500 && emprestimo > 1000 && emprestimo < renda * 10) {
    alert('Parabéns, você foi aprovado para o nosso empréstimo!');
}
else {
    alert('Desculpe, mas parece que você não se enquadra no perfil que buscamos. Contate um de nossos gerentes.');
}