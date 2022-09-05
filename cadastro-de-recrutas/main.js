//Exercício 1 - "Cadastro de recrutas";

let name = prompt("Apresente-se, Recruta! Qual é o seu nome?")
let lastName = prompt("Como te chamaremos, " + name + "? Diga seu sobrenome!")
let work = prompt("Qual é seu campo de atuação, " + lastName + "?")
let year = Number(prompt("E por último, me diga seu ano de nascimento!"))
let age = 2022 - year

alert("Cadastro finalizado. Estes são os seus dados: \n Nome completo: " + name + " " + lastName + "\n Área de atuação: " + work + "\n Idade: " + age + "\n Bem-vindo, novato.")

