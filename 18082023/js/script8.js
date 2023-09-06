/* objetivo: fazer o carregamento da url com filmes
será utilizado o comando fetch() para localizar e carregar os filmes e exibir em 
uma página html*/

function carregarFilmes() {
fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR-US&page=1")


//localize o arquivo       receba os dados localizados em json    guarde os dados na variável dados
//fetch("js/alunos.json")
   .then((response) => response.json())    .then((dados) => {
    
            //exibe na tela os resultados
            console.log(dados.results);

            var saida = "<div id=filme>";

            dados.results.map((item, i) => {
                saida += `
    <div>
    <img src=https://image.tmdb.org/t/p/w500${item.poster_path}>
    <p id=data>${item.release_date} </p>
    <p id=voto>${item.vote_average}</p>
    <h2>${item.title}</h2>
    </div> 
`; 
/*
` <div>
nome 
idade
turma
 </div>
 `;*/
           });

            saida += "</div>";
            document.body.innerHTML += saida;
        })

        .cacth((erro) => console.log(`Erro ao tenar executar API -> ${erro}`));
}