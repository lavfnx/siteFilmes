/* Funções em javascript 

 Existem doisn tipos de funções:
- Reservadas pela linguagem
alert()
prompt()
console.log()

- Personalizadas
criadas pelo usuário, é necessário que sejam construídas utilizando a estrutura
function nomeDaFuncao() {


}
e em seguidas chamadas paras erem executadas

Em cada função há a presença dos parênteses () que podem estarem vazios ou não.
Os parênteses recebem um argumento. Quando este agumento é uma variável, dizemos que ele recebe um parâmetro. */


// função personalizada sem argumento, já o comando console.log(Olá , mundo!) possui um argumento do tipo string
function saudacao() {
 console.log("Olá, mundo!");
}

saudacao ();

//funçaõ personalizada com PARÂMETRO, pois se trata de uma variável previamente declarada e que será utilizada no bloco de código
var nome;
function despedida (nome) {
 console.log("Tchau" + nome);
}
 
despedida("João");

//função personalizada com parâmetro 
function soma(a,b) {
 return a + b;
}

var resultado = soma(5,3);
console.log (resultado);