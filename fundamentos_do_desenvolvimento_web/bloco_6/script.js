const selectState = document.getElementById('estado');
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

function generateStates() {
  for (let index = 0; index < states.length; index += 1) {
    let option = document.createElement('option');
    option.innerText = states[index];
    option.id = index;
    option.classList.add('options');
    selectState.appendChild(option);
  }
}

generateStates();