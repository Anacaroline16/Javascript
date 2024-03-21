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
let somaMedias=0
let contador=1
while (contador<=num) {
    console.log(`Aluno ${contador}`);
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

/*
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let num;
do {
    let num= input.questionInt('Digite um número aleatorio de 1 a 100:');
    if (num===numeroAleatorio){
        console.log('Você acertou!!');
        break
    }else if (num<numeroAleatorio){
        console.log('Tente um numero maior.');
    }else{
        console.log('Tente um numero menor.');
    }
    
} while (num  !== numeroAleatorio);
*/
//For
//questão 1
/*
let anterior = 0;
let atual = 1;
console.log(anterior);
console.log(atual);
for (let i = 3; i <= 20; i++) {
    let proximo = anterior + atual;
    console.log(proximo);
    anterior = atual;
    atual = proximo;
}
*/
//questao 2
/*
for (let i = 1; i <= 10; i++) {
   
    let nome = input.question(`Informe o nome da ${i}ª dadosPessoas: `);
    let salario = input.questionFloat(`Informe o salário de ${nome}: `);
    let impostoRenda = 0;

    if (salario <= 2100) {
        impostoRenda = 0;
    } else if (salario <= 2800) {
        impostoRenda = salario * 0.075;
    } else if (salario <= 3750) {
        impostoRenda = salario * 0.15;
    } else if (salario <= 4660) {
        impostoRenda = salario * 0.225;
    } else {
        impostoRenda = salario * 0.275;
    }
    console.log(`\nImposto de Renda a ser pago`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`);
}
*/
//for in
//questão 1

const dadosPessoas = {
    nome: "Ana",
    idade: 16,
    cidade: "Vilhena"
};
for (let propriedades in dadosPessoas) {
    console.log(`${propriedades}: ${dadosPessoas[propriedades]}`);
}
// for Of 
//questão 1
const cores = ["Rosa", "Azul", "", "Verde", "Vermelho"];
for (let cor of cores) {
    console.log(cor);
}

// 03-Escreva um programa que itere sobre os caracteres de uma string e imprima cada caractere.
console.log("\n\t--- Exercício 03 ---")
// Definir uma string
const string = "Socorro";

// Iterar sobre os caracteres da string usando for...of
for (let caractere of string) {
    // Imprimir o caractere
    console.log(caractere);
}