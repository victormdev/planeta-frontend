// Lista de tipos de canais disponíveis
  const channelTypes = [
    "Instagram",
    "Facebook",
    "Tik Tok",
    "Kawai",
    "Canal Youtube",
    "Site",
    "Canal Sua Música",
    "Rádios",
    "Playlists"
  ];

  // Função para adicionar um novo canal
  function addChannel() {
    const channelList = document.getElementById("channelList");
    const newChannelItem = document.createElement("li");
    newChannelItem.className = "channel-item";

    // Adiciona a lista de seleção para escolher o tipo de canal
const channelSelect = document.createElement("select");
channelSelect.name = "channelType";

// Adiciona uma classe para estilização
channelSelect.classList.add("custom-select");

channelTypes.forEach(type => {
  const option = document.createElement("option");
  option.value = type;
  option.text = type;
  channelSelect.add(option);
});
// Adiciona o campo de entrada ao lado do select
const inputField = document.createElement("input");
inputField.type = "text";
inputField.style.backgroundColor = "#121212";
inputField.style.border = "1px solid #ccc";
inputField.style.fontSize = "14px";
inputField.style.marginRight = "10px";
inputField.style.borderRadius = "10px";
inputField.style.padding = "8px";
inputField.style.color = "#fff";
inputField.placeholder = "Digite a URL aqui";
// Adiciona a classe CSS
document.body.appendChild(channelSelect);

// Estilizações com CSS
const css = `
  .custom-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
    background-color: #121212;
    margin-right: 10px;
    color: #fff;
    font-size: 14px;
    cursor: pointer; 
    background-image: url('data:image/svg+xml;utf8,<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
    background-repeat: no-repeat;
    background-position: right 8px center;
    /* Adicione mais estilos conforme necessário */
  }
`;

const style = document.createElement("style");
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

    // Adiciona o botão para remover o canal
    const removeButton = document.createElement("button");
  removeButton.className = "btn bg-gradient-primary px-3 mb-2 active remove-channel";
  removeButton.textContent = "X";
  removeButton.onclick = function () {
    channelList.removeChild(newChannelItem);
  };

    newChannelItem.appendChild(channelSelect);
    newChannelItem.appendChild(inputField);
    newChannelItem.appendChild(removeButton);
    channelList.appendChild(newChannelItem);
  }

  // Lidar com o envio do formulário (pode ser personalizado para enviar dados ao servidor)
  document.getElementById("channelForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Aqui você pode processar os dados do formulário antes de enviá-los para o servidor
    // Exemplo: console.log("Canais enviados:", gatherChannels());
  });

  // Função para coletar os canais selecionados
  function gatherChannels() {
    const channelList = document.getElementById("channelList");
    const selectedChannels = [];
    channelList.querySelectorAll("li").forEach(item => {
      const channelType = item.querySelector("select").value;
      selectedChannels.push(channelType);
    });
    return selectedChannels;
  }