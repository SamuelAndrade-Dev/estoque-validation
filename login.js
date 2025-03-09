function logar() {
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;

  if (login == "samuelppa" && senha == "samuel") {
    location.href = "estoque.html";
  } else {
    alert("Usuario ou senha incorreto");
  }
}

function verificarCheckBox() {
  let check = document.getElementById("check");

  for (let i = 0; i < check.length; i++) {
    if (check[i].checked == true) {
      location.href = "estoque.html";
    } else {
      alert("Captcha desmarcado");
    }
  }
}
