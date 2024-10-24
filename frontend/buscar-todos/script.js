document.addEventListener("DOMContentLoaded", function () {
    // Função para buscar colaboradores da API
    function buscarColaboradores() {
        fetch('http://localhost:8080/colaborador')
            .then(response => response.json()) // Converte a resposta para JSON
            .then(data => {
                console.log(data); // Verifica a estrutura da resposta no console
                // Acessa a propriedade 'content', que contém o array de colaboradores
                if (Array.isArray(data.content)) {
                    exibirColaboradores(data.content); // Passa o array de colaboradores para exibir
                } else {
                    console.error('A propriedade "content" não é um array:', data);
                }
            })
            .catch(error => console.error('Erro ao buscar colaboradores:', error));
    }

    // Função para exibir os colaboradores na tela
    function exibirColaboradores(colaboradores) {
        const listaColaboradores = document.getElementById('colaboradores-list');
        
        // Limpa o conteúdo existente antes de adicionar novos elementos
        listaColaboradores.innerHTML = '';

        colaboradores.forEach(colaborador => {
            const divColaborador = document.createElement('div');
            divColaborador.classList.add('colaborador');

            divColaborador.innerHTML = `
                <h2>${colaborador.nome}</h2>
                <p><strong>Departamento:</strong> ${colaborador.departamento}</p>
                <p class="cargo"><strong>Cargo:</strong> ${colaborador.cargo}</p>
                <p><strong>Descrição do cargo:</strong> ${colaborador.descricaocargo}</p>
                <p class="salario"><strong>Salário:</strong> R$ ${colaborador.salario.toFixed(2)}</p>
            `;

            listaColaboradores.appendChild(divColaborador);
        });
    }

    // Chama a função para buscar colaboradores ao carregar a página
    buscarColaboradores();
});
