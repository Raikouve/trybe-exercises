let varInput = document.querySelectorAll("input");
const selectState = document.getElementById("estado");
const states = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
  "Distrito Federal",
];
const dataInput = document.getElementById("data");
const sendButton = document.getElementById("enviar");
const clearButton = document.getElementById("limpar");

function generateStates() {
  for (let index = 0; index < states.length; index += 1) {
    let option = document.createElement("option");
    option.innerText = states[index];
    option.id = index;
    option.classList.add("options");
    selectState.appendChild(option);
  }
}

function verifyData() {
  if (dataInput.value.length != 10) {
    alert("Tamanho da data inválido");
  } else {
    for (let index = 0; index < dataInput.value.length; index += 1) {
      if (dataInput.value[index] === "-") {
        alert("Você digitou um número negativo");
      }
    }
  }
}

function stopDefAction(event) {
  event.preventDefault();
}

function clearAll() {
  document.querySelector("form").reset();
}

sendButton.addEventListener("click", verifyData);
clearButton.addEventListener("click", clearAll);
document.getElementById("home").addEventListener("click", stopDefAction);

generateStates();
