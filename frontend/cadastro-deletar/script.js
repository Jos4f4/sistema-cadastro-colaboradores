function deletarColaborador() {
    // Captura o ID do colaborador
    const id = document.getElementById('id').value;

    if (!id) {
        alert('Por favor, informe o ID do colaborador.');
        return;
    }


    const confirmacao = confirm(`Tem certeza que deseja deletar o colaborador com ID ${id}?`);
    if (!confirmacao) {
        return;
    }

    // Envia o DELETE para o endpoint http://localhost:8080/colaborador/{id}
    fetch(`http://localhost:8080/colaborador/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Colaborador deletado com sucesso!');
        } else {
            alert('Erro ao deletar colaborador.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao deletar colaborador.');
    });
}