// Exercício 2 - "Calculadora 4 operações";
// Exercício para fixação de operações matemáticas básicas. Armazenei as operações em uma constante afim de exercitar boas práticas como diminuição do uso do IF() e
// utilizei um switch para chamar as funções de cada operação.

let a = Number(prompt("Insira um número."))
let b = Number(prompt("Insira o segundo número."))
const options = (prompt("Insira a opção para escolher a operação desejada: \n a) Somar \n b) Subtrair \n c) Multiplicar \n d) Dividir"))
const operators = {
    a: function() {return a+b},
    b: function() {return a-b},
    c: function() {return a*b},
    d: function() {return a/b}
}


switch(options) { 
    case 'a': 
    alert("O resultado é: " + operators.a())
    break
    case 'b': 
    alert("O resultado é: " + operators.b())
    break
    case 'c': 
    alert("O resultado é: " + operators.c())
    break
    case 'd': 
    alert("O resultado é: " + operators.d())
    break
    default: alert("Inserção inválida!")
}
