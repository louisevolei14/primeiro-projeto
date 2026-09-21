function login() {

    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    
    const nomeCorreto = "admin";
    const senhaCorreta = "1234";

    if (nome === nomeCorreto && senha === senhaCorreta) {

        
        window.location.href = "726ed42e62252b7e918e364bea041b96.png";

    } else {

        document.getElementById("mensagem").textContent =
            "Nome ou senha incorretos.";

    }
}