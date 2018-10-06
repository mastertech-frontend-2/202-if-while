let idade = prompt ('Qual sua idade?');
let renda = prompt('Agora nos diga, por favor, qual sua renda?');
let emprestimo = prompt('E quanto você gostaria de pegar emprestado?');

if (idade >= 25 && idade <= 65 && renda >= 1500 && emprestimo >= 1000 && emprestimo <= renda * 10) {
    alert('Parabéns, você foi aprovado para o nosso empréstimo!');

    let parcelas = prompt('Em quantas parcelas você gostaria de pagar seu empréstimo? Nós oferecemos parcelamentos entre 5 e 24 meses.');

    if (parcelas < 5) {
        parcelas = 5;
    }
    else if (parcelas > 24) {
        parcelas = 24;
    }

    let valorParcela = (emprestimo * (1 + juro) ** parcelas) / parcelas;

    alert(`Parabéns, você acaba de receber um empréstimo de R$${emprestimo},00. Você deverá pagar esse valor em ${parcelas} de R$${valorParcela.toFixed(2)}.`)
}
else {
    alert('Desculpe, mas parece que você não se enquadra no perfil que buscamos. Contate um de nossos gerentes.');
}