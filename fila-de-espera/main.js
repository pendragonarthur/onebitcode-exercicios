// Exercício 9 - "Fila de espera"
// Exercício para fixação da manipulação de arrays. 

let fila = ["Arthur", " Mauro", " Marcos"]
let menu = Number(prompt("Fila de espera: " + fila + "\n Escolha uma ação: \n 1- Adicionar paciente \n 2- Consultar paciente \n 3- Sair"))

switch(menu) { 
    case 1: 
    let novoPaciente = prompt("Insira o nome do novo paciente.")
    fila.push(novoPaciente)
    alert("Sr./Sra. " + novoPaciente + " adicionado a fila de espera. Fila atual: " + fila)
    break

    case 2: 
    let consultarPaciente = prompt("Insira o nome do paciente a ser consultado.")

    if (fila.includes(consultarPaciente) == true && fila.indexOf(consultarPaciente) == 0) { 
        fila.shift(consultarPaciente)
        alert("Sr./Sra. " + consultarPaciente + " consultado. Fila atual: " + fila)
    } else { 
        alert("Paciente inexistente ou não se encontra na ordem da fila..")
    }
    break
}

if (menu == 3) { 
    alert("Encerrando...")
} 
