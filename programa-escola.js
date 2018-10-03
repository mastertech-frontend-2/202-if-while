let nota = Number(prompt('Digite a nota do aluno:'));
let media = 7;
let notaParaRecuperacao = 5;

if (nota >= media) {
    alert(`O aluno foi aprovado com nota ${nota}.`);
}
else if (media >= notaParaRecuperacao) {
    if (confirm('Esse aluno não tem nota para ser aprovado. Clique em OK para aprová-lo mesmo assim.')) {
        alert(`O aluno foi aprovado com nota ${nota}.`);
    }
    else {
        alert(`O aluno precisa fazer uma recuperação, visto que sua nota foi ${nota}. A média esperada é ${media}.`);
    }
}
else {
    alert(`O aluno foi reprovado com nota ${nota}. A média esperada é ${media}.`);
}