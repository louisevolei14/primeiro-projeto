function login() {

    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    // Dados do login
    const nomeCorreto = "admin";
    const senhaCorreta = "1234";

    if (nome === nomeCorreto && senha === senhaCorreta) {

        // Direciona para a página da foto
        window.location.href = "foto.html";

    } else {

        document.getElementById("mensagem").textContent =
            "Nome ou senha incorretos.";

    }
}