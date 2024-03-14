//Exercicio do dia 07/03
import input from 'readline-sync';
//Exercicio 1
let dia = input.questionInt('Digite um número do dia:');
switch (dia) {
    case 1:
        console.log('Domingo')
        break;
    case 2:
        console.log('Segunda-feira')
        break;
    case 3:
        console.log('Terça-feira')
        break;
    case 4:
        console.log('Quarta-feira')
        break;
    case 5:
        console.log('Quinta-feira')
        break;
    case 6:
        console.log('Sexta-feira')
        break;
    case 7:
        console.log('Sábado')
        break;
    default:
        console.log('Dia não encontrado!')
        break;
}
//Exercicio 2
let mes= input.questionInt('Digite um número do mes:');
switch (mes) {
    case 1:
        console.log('Janeiro')
        break;
    case 2:
        console.log('Fevereiro')
        break;
    case 3:
        console.log('Março')
        break;
    case 4:
        console.log('Abril')
        break;
    case 5:
        console.log('Maio')
        break;
    case 6:
        console.log('Junho')
        break;
    case 7:
        console.log('Julho')
        break;
    case 8:
        console.log('Agosto')
        break;
    case 9:
        console.log('Setembro')
        break;
    case 10:
        console.log('Outubro')
        break;
    case 11:
        console.log('Novembro')
        break;
    case 12:
        console.log('Dezembro')
        break;
    default:
        console.log('número do mes não encontrado!')
        break;
}

//exercicio 3

let num1= input.questionInt('Digite um número:');
let num2= input.questionInt('Digite um número:');
let operacao= input.question('Digite a operacao desejada:');
switch (operacao) {
    case '+':
        console.log(`Total: ${num1+num2}`)
        break;
    case '-':
        console.log(`Total: ${num1-num2}`)
        break;
    case '*':
        console.log(`Total: ${num1*num2}`)
        break;
    case '/':
        console.log(`Total: ${num1/num2}`)
        break;
    default:
        console.log('Operacao Indisponivel')
        break;
}

//Exercicio 4
let salario= input.questionInt('Digite seu salario atual:');
let boni= input.question('Digite a categoria de sua bonificacao:');
switch (boni) {
    case 'A':
        console.log(`Sua bonificacao sera de:R$${salario*(5/100)}`)
        break;
    case 'B':
        console.log(`Sua bonificacao sera de: R$${salario*(10/100)}`)
        break;
    case 'C':
        console.log(`Sua bonificacao sera de: R$${salario*(15/100)}`)
        break;
    case 'D':
        console.log(`Sua bonificacao sera de: R$${salario*(20/100)}`)
        break;
    default:
        console.log('Aumento nao encotrado')
        break;
}







