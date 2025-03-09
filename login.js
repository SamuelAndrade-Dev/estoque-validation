function logar() {
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;
  let captcha = document.getElementById("captcha").value;

  if (login == "samuelppa" && senha == "samuel") {
    location.href = "estoque.html";
  } else {
    alert("Usuario ou senha incorreto");
  }

  if (captcha == "checked") {
    location.href = "estoque.html";
  } else {
    alert("Captcha inválido");
  }
}
