const perroActualElement = document.getElementById("perroActual");
const spinner = document.getElementById("spinner");
const perrosLikeContainer = document.getElementById("perrosLikeContainer");
const perrosDislikeContainer = document.getElementById("perrosDislikeContainer");

// Referencias de la tabla
const countLikeEl = document.getElementById("countLike");
const countDislikeEl = document.getElementById("countDislike");
const countSaltearEl = document.getElementById("countSaltear");

// Referencia del menú desplegable de Razas Favoritas
const favoritosSelect = document.getElementById("favoritosSelect");

// Variables de estado
let perroActual;
let likes = 0;
let dislikes = 0;
let salteados = 0;
const conteoFavoritos = {};

perrosLikeContainer.classList.toggle("escondido");
perrosDislikeContainer.classList.toggle("escondido");

document.getElementById("like").addEventListener("click", () => {
  rankearPerro("+");
});

document.getElementById("dislike").addEventListener("click", () => {
  rankearPerro("-");
});

// Incrementa el contador al hacer clic en "saltear"
document.getElementById("saltear").addEventListener("click", () => {
  salteados++;
  countSaltearEl.textContent = salteados;
  nuevoPerro();
});

perroActualElement.addEventListener("load", () => {
  spinner.classList.toggle("escondido", true);
  perroActualElement.classList.toggle("escondido", false);
});

function rankearPerro(ranking) {
  const nuevaImagen = document.createElement("img");
  nuevaImagen.src = perroActual;

  if (ranking === "+") {
    likes++;
    countLikeEl.textContent = likes;
    perrosLikeContainer.appendChild(nuevaImagen);
    perrosLikeContainer.classList.toggle("escondido", false);

    // Extrae la raza desde la URL de Dog CEO API y actualiza el conteo
    const raza = perroActual.split("/")[4];
    conteoFavoritos[raza] = (conteoFavoritos[raza] || 0) + 1;
    actualizarDropdownFavoritos();
  } else {
    dislikes++;
    countDislikeEl.textContent = dislikes;
    perrosDislikeContainer.appendChild(nuevaImagen);
    perrosDislikeContainer.classList.toggle("escondido", false);
  }

  nuevoPerro();
}

// Función para regenerar las opciones del menú desplegable
function actualizarDropdownFavoritos() {
  favoritosSelect.innerHTML = '<option value="">-- Razas Favoritas --</option>';

  for (const [raza, cantidad] of Object.entries(conteoFavoritos)) {
    const opcion = document.createElement("option");
    opcion.value = raza;
    opcion.textContent = `${raza.toUpperCase()} (${cantidad})`;
    favoritosSelect.appendChild(opcion);
  }
}

async function nuevoPerro() {
  perroActualElement.classList.toggle("escondido", true);
  spinner.classList.toggle("escondido", false);
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const jsonRes = await res.json();

  if (jsonRes.status === "success") {
    perroActual = jsonRes.message;
    perroActualElement.src = perroActual;
  } else {
    nuevoPerro();
  }
}

// Ejecución inicial
nuevoPerro();