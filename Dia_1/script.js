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
                    estado.textContent = "Estado: " + personaje.status;

                    card.append(img, h2, estado);
                    contenedor.appendChild(card);
                });
            }, 2000);
        });
};

function filtrar() {
    const contenedor = document.getElementById("container");
    contenedor.textContent = "Cargando...";
    const filtro = document.getElementById("myInput").value;
    let linkAPIFiltrado = linkAPI + `?name=${filtro}`;

    fetch(linkAPIFiltrado)
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
                    estado.textContent = "Estado: " + personaje.status;

                    card.append(img, h2, estado);
                    contenedor.appendChild(card);
                });
            }, 2000);
        });
}

const linkAPI = "https://rickandmortyapi.com/api/character";
obtener();
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementsByClassName("myButton")[0];
    button.addEventListener("click", filtrar);
});
