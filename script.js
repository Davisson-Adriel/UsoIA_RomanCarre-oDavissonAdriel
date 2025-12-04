function obtenerproductor() {
    const contenedor = document.getElementById("container");
    fetch(linkAPI)
        .then(response => response.json())
        .then(personajes => {

            contenedor.innerHTML = '';

            setTimeout(() => {
                contenedor.textContent = "";

                personajes.forEach(personaje => {
                    const card = document.createElement("div");
                    card.className = "card";
                    const img = document.createElement("img");
                    img.src = personaje.image;
                    img.alt = personaje.title;
                    const h2 = document.createElement("h2");
                    h2.textContent = personaje.title;
                    const estado = document.createElement("p");
                    estado.textContent = personaje.price;

                    card.append(img, h2, estado);
                    contenedor.appendChild(card);
                });
            }, 3000);
        });
};

const linkAPI = "https://fakestoreapi.com/products";
const linkAPI2 = "https://rickandmortyapi.com/api/character";