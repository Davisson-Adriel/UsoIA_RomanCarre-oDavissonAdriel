function obtener() {
    const contenedor = document.getElementById("container");
    fetch(linkAPI)
        .then(response => response.json())
        .then(personajes => {

            personajes = personajes.results;

            setTimeout(() => {
                contenedor.textContent = "";

                personajes.forEach(personaje => {
                    const card = document.createElement("div");
                    card.className = "card";
                    const img = document.createElement("img");
                    img.src = personaje.image;
                    const h2 = document.createElement("h2");
                    h2.textContent = personaje.name;
                    const estado = document.createElement("p");
                    estado.textContent = personaje.status;

                    card.append(img, h2, estado);
                    contenedor.appendChild(card);
                });
            }, 2000);
        });
};

const linkAPI = "https://rickandmortyapi.com/api/character";

obtener();