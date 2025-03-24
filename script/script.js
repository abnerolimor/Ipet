const wrapper = document.querySelector('.wrapper')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')
const criarconta = document.getElementById("criarbotao")

registerLink.onclick = () => {
    wrapper.classList.add('active')
}

loginLink.onclick = () => {
    wrapper.classList.remove('active')
}

// criarconta.onclick = function() {
//     alert("funciona")
//     // window.location.href = "../page/cat-loader.html"
// }



// registerLink.onclick = () => {
//     // Exibir a tela de carregamento antes de fazer a transição
//     loadingOverlay.style.display = 'flex';

//     // Simular um processo de registro (por exemplo, uma requisição de API)
//     setTimeout(() => {
//         // Depois de um tempo (simulando o processo de login), exibe o conteúdo de registro
//         wrapper.classList.add('active');
//         loadingOverlay.style.display = 'none';  // Esconde a tela de carregamento
//     }, 2000); // Simula o tempo de carregamento de 2 segundos
// };

// loginLink.onclick = () => {
//     // Exibir a tela de carregamento antes de fazer a transição
//     loadingOverlay.style.display = 'flex';

//     // Simular um processo de login (por exemplo, uma requisição de API)
//     setTimeout(() => {
//         // Depois de um tempo (simulando o processo de login), exibe o conteúdo de login
//         wrapper.classList.remove('active');
//         loadingOverlay.style.display = 'none';  // Esconde a tela de carregamento
//     }, 2000); // Simula o tempo de carregamento de 2 segundos
// };

// document.getElementById("redirectLink").click();

// document.addEventListener("DOMContentLoaded", function () {
//     const loginButton = document.getElementById("entrar");
//     const redirectForm = document.getElementById("redirectForm");

//     if (loginButton && redirectForm) {
//         loginButton.addEventListener("click", function (event) {
//             event.preventDefault(); // Evita ações padrão
//             console.log("Botão Entrar clicado! Redirecionando via formulário...");
//             redirectForm.submit(); // Força a navegação
//         });
//     } else {
//         console.error("Botão Entrar ou formulário não encontrado!");
//     }
// });



//  document.addEventListener("DOMContentLoaded", function () {
//      const loginButton = document.getElementById("entrar");

//      if (loginButton) {
//          loginButton.addEventListener("click", function (event) {
//              event.preventDefault(); // Evita o recarregamento da página
//              console.log("Botão Entrar clicado! Redirecionando...");

//              setTimeout(() => {
//                  location.assign("cat-loader.html"); // Redireciona de forma mais segura
//              }, 500); // Pequeno atraso para evitar bloqueios
//          });
//      } else {
//          console.error("Botão Entrar não encontrado!");
//      }
//  });
