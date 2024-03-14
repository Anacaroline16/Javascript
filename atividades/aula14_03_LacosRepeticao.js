import input from 'readline-sync';
//While 
// Questão 1
/*
let num= input.questionInt('Digite um número:');
let contador= 0
while (contador<=10) {
    console.log(`${num} X ${contador}: ${num*contador}`)
    contador++;
}
*/

//Questão 2
/*
let num= input.questionInt('Digite o número de aluno na turma:');
let contador=num
while (contador<num) {

    let nota1= input.questionInt(`Digite a nota do 1 bimentre:`);
    let nota2= input.questionInt(`Digite a nota do 2 bimentre:`);
    let nota3= input.questionInt(`Digite a nota do 3 bimentre:`);
    let nota4= input.questionInt(`Digite a nota do 4 bimentre:`);
    media=(nota1+nota2+nota3+nota4)/4
    console.log(media)
    contador++;
}
mediaTurma=media/num
console.log(mediaTurma)
*/
//Do While

let num= input.questionInt('Digite um número aleatorio de 1 a 100:');
do {
    let min = 1;
    let max = 100;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numeroAleatorio);
} while (contador==num);
    console.log('Você acertou!!')
    break
    else:
