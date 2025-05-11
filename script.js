const url = "https://api.chucknorris.io/jokes/random";

const card = document.getElementById("card");
const id = document.getElementById("id");
const name = document.getElementById("name");
const color = document.getElementById("color");
const storage = document.getElementById("storage");
const btn = document.getElementById("fetchBtn");

btn.addEventListener("click", () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      card.innerHTML = `<div if="card">
      <p id="id">${data.id}</p>
      <p id="name">${data.name}</p>
      <p id="color">${data.color}</p>
      <p id="storage">${data.storage}</p>
    </div>`;
    })
    .catch((error) => console.log(error, "ver moidzebna"));
});
 