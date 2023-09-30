function imprimirMensagem() {
    console.log("Conexão feita com sucesso!");
    const divMensagem = document.getElementById("mensagem");
    divMensagem.innerHTML += "Conexão feita com sucesso!<br>";
}

// Chama a função com delay
setTimeout(imprimirMensagem, 1000); // 1 segundo
setTimeout(imprimirMensagem, 2000); // 2 segundos
setTimeout(imprimirMensagem, 3000); // 3 segundos
