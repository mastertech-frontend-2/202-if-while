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
        }
    }
}