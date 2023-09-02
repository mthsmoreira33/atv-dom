const botoesEditar = document.querySelectorAll(".botao-editar");
const botoesApagar = document.querySelectorAll(".botao-apagar");
const tituloCards = document.querySelectorAll(".titulo-card");
const descricaoCards = document.querySelectorAll(".descricao-card");
const cards = document.querySelectorAll('.card');

botoesEditar.forEach((botaoEditar, index) => {
  botaoEditar.addEventListener("click", () => {
    const editedText = prompt("Digite o título: ");
    const editedDescription = prompt("Digite a descrição: ");
    tituloCards[index].classList.add("titulo-card-styled");
    descricaoCards[index].classList.add("descricao-card-styled");
    tituloCards[index].textContent = editedText;
    descricaoCards[index].textContent = editedDescription;
  });
});

botoesApagar.forEach((botaoApagar) => {
    botaoApagar.addEventListener('click', () => {
        if(confirm('Deseja deletar o card?')) {
            botaoApagar.parentElement.remove();
            alert('Confirmado!');
            return;
        }
        alert('Cancelado!');
    });
});
