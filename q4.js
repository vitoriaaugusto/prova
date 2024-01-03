document.getElementById('botaoFruta').addEventListener('click', () => {

    const url = `http://localhost:3000/fruta/:maca`;

    // Faz a requisição GET usando Fetch API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(detalhes => {
            // Trata os detalhes da fruta e exibe no cliente
            exibirDetalhes(detalhes);
        })
        .catch(error => {
            console.error('Erro ao obter detalhes da fruta:', error);
        });
});

function exibirDetalhes(detalhes) {
    // Obtém a div onde os detalhes da fruta serão exibidos
    const detalhesFrutaDiv = document.getElementById('detalhesFruta');

    // Constrói o conteúdo a ser exibido (substitua pelos detalhes reais da sua resposta)
    const conteudo = `
        <h2>${detalhes.nome}</h2>
        <p>Cor: ${detalhes.cor}</p>
        <p>Preço: ${detalhes.preco}</p>
    `;

    // Define o conteúdo na div
    detalhesFrutaDiv.innerHTML = conteudo;
}