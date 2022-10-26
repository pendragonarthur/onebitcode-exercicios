// Exercício 12 - "Calculadora geométrica"

let menu;
let base;
let altura;
let lado;
let baseMaior;
let baseMenor;
let raio;

const calculadora = { 
    triângulo: function tri() {return (base * altura)/2},
    retângulo: function ret() {return base * altura},
    quadrado: function quad() {return lado**2},
    trapézio: function trap() {return (baseMaior + baseMenor) * altura / 2},
    círculo: function cir() { return 3.14 * raio**2}
}

do { 
   menu = Number(prompt("Escolha a área que deseja calcular: \n 1. Triângulo \n 2. Retângulo \n 3. Quadrado \n 4. Trapézio \n 5. Círculo \n 6. Sair"))
   switch(menu){ 
    case 1: 
    base = Number(prompt("Insira a base."))
    altura = Number(prompt("Insira a altura."))
    alert("A área do triângulo é: " + calculadora.triângulo())
    break
    case 2: 
    base = Number(prompt("Insira a base."))
    altura = Number(prompt("Insira a altura."))
    alert("A área do retângulo é: " + calculadora.retângulo())
    break
    case 3: 
    lado = Number(prompt("Insira o lado."))
    alert("A área do quadrado é: " + calculadora.quadrado())
    break
    case 4: 
    baseMaior = Number(prompt("Insira a base maior."))
    baseMenor = Number(prompt("Insira a base menor."))
    altura = Number(prompt("Insira a altura."))
    alert("A área do trapézio é: " + calculadora.trapézio())
    break
    case 5: 
    raio = Number(prompt("Insira o raio."))
    alert("A área do círculo é: " + calculadora.círculo())
    break
    case 6: 
    alert("Encerrando.")
    break
}

} while (menu !== 6)

