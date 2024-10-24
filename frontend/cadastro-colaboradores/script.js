function salvarColaborador() {
    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const departamento = document.getElementById('departamento').value;
    const cargo = document.getElementById('cargo').value;
    const salario = document.getElementById('salario').value;
    const descricaocargo = document.getElementById('descricaocargo').value;

    const colaborador = {
        nome: nome,
        departamento: departamento,
        cargo: cargo,
        salario: salario,
        descricaocargo: descricaocargo
    };

    // Envia os dados para o endpoint http://localhost:8080/colaborador
    fetch('http://localhost:8080/colaborador', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify(colaborador)
    })
    .then(response => {
        if (response.ok) {
            alert('Colaborador salvo com sucesso!');
        } else {
            alert('Erro ao salvar colaborador.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao salvar colaborador.');
    });
}