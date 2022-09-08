// Exercício 3 - "Conversor de medidas";
// Exercício para fixação do uso do Switch. Utilizei uma variável constante para armazenar as funções de cada conversão afim de exercitar boas práticas no código, em
// vez de armazená-las uma em cada respectivo "case". 

let medidaInicial = Number(prompt("Insira a medida em metros."))
let menu = prompt("Para qual medida deseja converter? \n a) Milímetros \n b) Decímetros \n c) Centímetros \n d) Decâmetros \n e) Hectômetros \n f) Quilômetros")
let medidaFinal; 
const conversor = { 
    a: function mm(){ return medidaFinal = medidaInicial*1000},
    b: function dm(){ return medidaFinal = medidaInicial*100},
    c: function cm(){ return medidaFinal = medidaInicial*10},
    d: function dam(){ return medidaFinal = medidaInicial/10},
    e: function hec(){ return medidaFinal = medidaInicial/100},
    f: function km(){ return medidaFinal = medidaInicial/1000}
}

switch(menu){ 
    case 'a': 
    alert("A medida agora é: " + conversor.a())
    break
    case 'b': 
    alert("A medida agora é: " + conversor.b())
    break
    case 'c': 
    alert("A medida agora é: " + conversor.c())
    break
    case 'd': 
    alert("A medida agora é: " + conversor.d())
    break
    case 'e': 
    alert("A medida agora é: " + conversor.e())
    break
    case 'f': 
    alert("A medida agora é: " + conversor.f())
    break
    default: alert("Inserção inválida.")
}
