document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  const mensagem = document.getElementById("mensagem");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const interesse = document.getElementById("interesse").value;

      mensagem.innerHTML = `<p>Obrigado, <strong>${nome}</strong>! Seu cadastro foi realizado com interesse em <em>${interesse}</em>.</p>`;
      form.reset();
    });
  }
});