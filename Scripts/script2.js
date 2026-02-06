// let token = localStorage.getItem("token");

// if (token == null) {
//   window.location.href = "login.html";
// }

const pot = document.getElementById('posts');

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = 
      `<h3>${post.title}</h3>`;

      pot.appendChild(card);
    });
  });

const Buscar = document.getElementById("buscar");
const postsContainer = document.getElementById("posts");

Buscar.addEventListener("input", () => {
  const texto = Buscar.value.toLowerCase();
  const cards = postsContainer.getElementsByClassName("card");

  Array.from(cards).forEach(card => {
    const titulo = card.querySelector("h3").textContent.toLowerCase();

    if (titulo.includes(texto)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
