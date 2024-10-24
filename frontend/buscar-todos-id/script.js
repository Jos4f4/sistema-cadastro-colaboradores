
function buscarColaborador() {
    const colaboradorId = document.getElementById('colaboradorId').value;

    if (!colaboradorId) {
        alert('Por favor, informe o ID do colaborador.');
        return;
    }

    // Envia a requisição GET para o endpoint com o ID informado(no backend está http://localhost:8080/colaborador/{id})
    fetch(`http://localhost:8080/colaborador/${colaboradorId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Colaborador não encontrado');
        }
        return response.json();
    })
    .then(data => {

        console.log(data);

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        // Exibe os dados do colaborador na tela
        const div = document.createElement('div');
        div.classList.add('colaborador');

        div.innerHTML = `
            <p><span>ID:</span> ${data.id}</p>
            <p><span>Nome:</span> ${data.nome}</p>
            <p><span>Departamento:</span> ${data.departamento}</p>
            <p><span>Cargo:</span> ${data.cargo}</p>
            <p><span>Salário:</span> R$${data.salario}</p>
            <p><span>Descrição do Cargo:</span> ${data.descricaocargo}</p>
        `;

        resultDiv.appendChild(div);
    })
    .catch(error => {
        console.error('Erro ao buscar colaborador:', error);
        document.getElementById('result').innerHTML = '<p>Colaborador não encontrado.</p>';
    });
}