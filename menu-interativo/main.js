// Exercício 5 - Menu Interativo
// Do While em prática: crie um menu interativo com opções genéricas. O menu deve continuar aparecendo na tela até que o usuário escolha a opção Encerrar. Ao encerrar, o programa deve
// abrir um alert de encerramento.

const menu = prompt("Bem-vindo ao menu interativo. Escolha uma opção: \n 1: Opção 1 \n 2: Opção 2 \n 3: Opção 3 \n 4: Opção 4 \n 5: Encerrar")

do { 
    newMenu = prompt("Você escolheu " + menu + " Escolha uma opção: \n 1: Opção 1 \n 2: Opção 2 \n 3: Opção 3 \n 4: Opção 4 \n 5: Encerrar")
} while(menu !== 'Encerrar' && newMenu !== 'Encerrar')
alert("Encerrando.")
