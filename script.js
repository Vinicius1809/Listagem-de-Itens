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
    const listarequisitos = document.getElementById("listarequisitos"); // Criamos essa variavel para adicionar uma (LI)
    const novorequisito = document.createElement("li");

    novorequisito.textContent = requisito;

    listarequisitos.appendChild(novorequisito); // esse comonado é para localizar onde a LI será chamada
    // Que será dentro da nossa UL com o id listarequisitos
  } // Nesse (IF) estou dizendo que se o meu campo de pesquisa estiver vazio, enviar um alerta de erro.
  // Se não estiver vazio, adicionar a tarefa desejada

  inputrequisito.value = ""; // Limpa o meu input após eu escrever o meu requisito e adicionar
}
