/* Exercício: Pergunte ao usuário seu nome usando prompt() em seguida, pergunte ao usuário a sua idade.
se a idade do usuário for menor que 18 anos, exiba na tela por meio do comando alert() que o usuário em questão é 
menor de idade. Se não, exiba na tela que o usuário é maior de idade. */

var nome, idade ;

nome = prompt ("Digite o seu nome: ");
idade = prompt ("Digite a sua idade: ");

if (idade < 18) {
    alert ("Você é menor de idade!");
}

else { 
    alert ("Você é maior de idade!");
}