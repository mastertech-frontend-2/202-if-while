let juro = 0.08;

let idade = prompt ('Qual sua idade?');

if (idade < 25 || idade > 65) {
    alert('Desculpe, mas nós buscamos clientes entre 25 e 65 anos.');
}
else {
    let renda = prompt('Agora nos diga, por favor, qual sua renda?');

    if  (renda < 1500) {
        alert('Desculpe, mas nós buscamos clientes com renda acima de R$1500,00.');
    } else {
        let emprestimo = prompt('E quanto você gostaria de pegar emprestado?');

        if (emprestimo < 1000 || emprestimo > renda * 10) {
            alert(`Desculpe, mas nós só fazemos empréstimos para você entre R$1500,00 e R$${renda*10},00.`);
        }
        else {
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
    }
}