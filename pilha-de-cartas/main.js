// Exercício 10 - "Pilha de cartas"
// Exercício para fixação de manipulação de arrays. O enunciado pede para que seja escrito um programa que simule um baralho de cartas. Se for escolhida a opção "Adicionar carta ao deck", o 
// programa deve adicionar a carta informada ao topo do deck. Caso a opção escolhida seja "Comprar uma carta", o programa deve exibir a carta comprada do topo do deck. 

let deck = ['Mago Negro', 'Rei Caveira', 'Dragão Amarelo de Rá', 'Braço Esquerdo Exodia', 'Braço Direito Exodia', 'Exodia']
let menu;
do { 
    menu = Number(prompt("Seu baralho atual: " + deck +"\n Escolha uma ação. \n 1- Adicionar carta ao deck \n 2- Comprar uma carta \n 3- Sair"))
switch(menu){ 
    case 1: 
    let novaCarta = prompt("Insira o nome da carta a ser adicionada.")
    deck.unshift(novaCarta)
    alert(novaCarta + " adicionada ao topo do deck. O seu deck agora é: " + deck)
    break
    case 2: 
    deck.shift[0]
    let cartaPuxada = deck[0]
    alert("Você puxou a carta " + cartaPuxada)
}} while (menu !== 3)
alert("Encerrando...")
