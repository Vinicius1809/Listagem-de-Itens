let requisitos = [];

function adicionarrequisito() {
  const inputrequisito = document.getElementById("inputrequisito");
  // Criei uma nova variavel, que irá buscar em meu HTML o input com ID input requisito
  const requisito = inputrequisito.value.trim(); // a função do value é pegar o que foi digitado no input

  if (requisito === "") {
    alert("O campo de pesquisa está vazio. Por favor digite algo!");
    return;
  } else {
    const mensagem = "Requisito adicionado com sucesso";
    document.getElementById("mensagem").textContent = mensagem;

    requisitos.push(requisito);
    renderizarrequisitos();
  }

  inputrequisito.value = ""; // Limpa o meu input após eu escrever o meu requisito e adicionar
}

function renderizarrequisitos() {
  const listarequisitos = document.getElementById("listarequisitos"); // Criamos essa variavel para adicionar uma (LI)
  listarequisitos.innerHTML = "";

  // for (iterador(inicio), condição(final), frequencia)

  for (let i = 0; i < requisitos.length; i++) {
    // i++ é igual a i + 1
    const novorequisito = document.createElement("li");

    novorequisito.textContent = requisitos[i];

    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerRequisito(i);

    novorequisito.appendChild(botaoRemover);

    listarequisitos.appendChild(novorequisito); // esse comonado é para localizar onde a LI será chamada
    // Que será dentro da nossa UL com o id listarequisitos
    // Nesse (IF) estou dizendo que se o meu campo de pesquisa estiver vazio, enviar um alerta de erro.
    // Se não estiver vazio, adicionar a tarefa desejada
  }
}

function removerRequisito(i) {
  requisitos.splice(i, 1);
  renderizarrequisitos();
} //requisitos.splice irá remover um requisito da minha lista
