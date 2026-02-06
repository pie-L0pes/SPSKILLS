function logar() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: usuario,
      password: senha
    })
  })
  .then(res => {
    if (res.ok === false) {
      throw new Error("Usuário ou senha inválidos");
    }
    return res.json();
  })
  .then(data => {
    localStorage.setItem("token", data.token);
    location.href = "home.html";
  })
  .catch(() => {
    alert("Usuário não cadastrado ou senha incorreta");
  });
}