const formSignup = document.getElementById('form-signup');
if (formSignup) {
    formSignup.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (!username || !email || !password) {
            exibirMensagemErro('Por favor, preencha todos os campos.');
            return;
        }
        exibirMensagemSucesso('Cadastro realizado com sucesso!');
    });
}
function exibirMensagemSucesso(mensagem) {
    const mensagemSucessoElement = document.getElementById('mensagem-sucesso');
    if (mensagemSucessoElement) {
        mensagemSucessoElement.innerText = mensagem;
        mensagemSucessoElement.style.display = 'block';
    }
}
function exibirMensagemErro(mensagem) {
    const mensagemErroElement = document.getElementById('mensagem-erro');
    if (mensagemErroElement) {
        mensagemErroElement.innerText = mensagem;
        mensagemErroElement.style.display = 'block';
    }
}
