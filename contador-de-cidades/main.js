let name = prompt("Olá, turista. Qual o seu nome?")
let totalCities = ''
let countCities = 0
let keepAsking = prompt("Você já visitou alguma cidade de SC? \n 1- Sim \n 2- Não")

while(keepAsking == '1'){ 
    let cityName = prompt("Qual o nome da cidade?")
    totalCities += cityName + '\n'
    countCities++
    keepAsking = prompt("Você já visitou alguma outra cidade de SC? \n 1- Sim \n 2- Não")
    if(keepAsking == '2'){ 
        break
    }
}

alert("Olá, " + name + ". Você visitou um total de " + countCities + " cidades. Sendo elas: " + totalCities)