const formLogin = document.getElementById('form-login');
if (formLogin) {
    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (!username || !password) {
            exibirMensagemErro('Por favor, preencha todos os campos.');
            return;
        }
        window.location.href = 'home.html';
    });
}
function exibirMensagemErro(mensagem) {
    const mensagemErroElement = document.getElementById('mensagem-erro');
    if (mensagemErroElement) {
        mensagemErroElement.innerText = mensagem;
        mensagemErroElement.style.display = 'block'; 
    }
}