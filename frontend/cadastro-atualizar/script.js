function atualizarColaborador() {
    // Captura os dados do formulário
    const id = document.getElementById('id').value;
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

    // Envia os dados para o endpoint http://localhost:8080/colaborador/{id}
    fetch(`http://localhost:8080/colaborador/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(colaborador)
    })
    .then(response => {
        if (response.ok) {
            alert('Colaborador atualizado com sucesso!');
        } else {
            alert('Erro ao atualizar colaborador.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao atualizar colaborador.');
    });
}
