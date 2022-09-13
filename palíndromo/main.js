// Exercício 8 - "Procurando palíndromos"

let word = prompt("Informe a palavra a ser verificada.")
let reverseWord = ""

for(let i = word.length - 1; i >= 0; i-- ){ 
    reverseWord += word[i]
}

if(word == reverseWord){ 
    alert("A palavra "+ word + " é um palíndromo")
} else { 
    alert("A palavra " + word + " não é um palíndromo")
}
