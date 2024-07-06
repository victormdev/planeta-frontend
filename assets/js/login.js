// Definindo um usuário e senha para a validação
var usuarioCorreto = "planeta@planetanordeste.com.br";
var senhaCorreta = "admin123";

function validarLogin(usuario, senha) {
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        // Redireciona para outra página HTML
        window.location.href = "/pages/dashboard.html";
    } else {
  // ... salvar outros campos ...
  document.getElementById('alertaErroLogin').style.display = 'block';
  
  // Oculta o alerta após 5 segundos
  setTimeout(function () {
    document.getElementById('alertaErroLogin').style.display = 'none';
}, 5000);
    }
}

// Adicionando um evento de clique ao botão de entrar
document.getElementById("entrar").addEventListener("click", function() {
    // Obtendo o usuário e a senha dos campos de entrada
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    // Chamando a função de validação de login
    validarLogin(usuario, senha);
});

// Adicionando um evento de keyup ao campo de entrada de senha
document.getElementById("senha").addEventListener("keyup", function(event) {
      // Verificando se a tecla Enter foi pressionada
      if (event.key === "Enter") {
          // Obtendo o usuário e a senha dos campos de entrada
          var usuario = document.getElementById("usuario").value;
          var senha = document.getElementById("senha").value;

          // Chamando a função de validação de login
          validarLogin(usuario, senha);
      }
  });