document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
});

document.getElementById("signup").addEventListener("click", function() {
    alert("Implemente a funcionalidade de criar conta!");
});

document.getElementById("forgotPassword").addEventListener("click", function() {
    var email = prompt("Digite seu e-mail para recuperar a senha:");
    if (email) {
        alert("Um e-mail de recuperação foi enviado para " + email);
    }
});