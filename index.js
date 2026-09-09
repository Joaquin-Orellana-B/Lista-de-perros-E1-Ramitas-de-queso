const perroActualElement = document.getElementById("perroActual");
const spinner = document.getElementById("spinner");
const perrosLikeContainer = document.getElementById("perrosLikeContainer");
const perrosDislikeContainer = document.getElementById("perrosDislikeContainer");
<<<<<<< HEAD
const favoritosSelect = document.getElementById("favoritosSelect"); // <--- Nuevo elemento HTML
=======

// Referencias de la tabla
const countLikeEl = document.getElementById("countLike");
const countDislikeEl = document.getElementById("countDislike");
const countSaltearEl = document.getElementById("countSaltear");

// Variables de estado
let perroActual;
let likes = 0;
let dislikes = 0;
let salteados = 0;
>>>>>>> origin/feature/cantidad_likes

perrosLikeContainer.classList.toggle("escondido");
perrosDislikeContainer.classList.toggle("escondido");

<<<<<<< HEAD
let perroActual;
const conteoFavoritos = {}; // <--- Guardará { "beagle": 2, "boxer": 1 }

=======
>>>>>>> origin/feature/cantidad_likes
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

// Función para obtener el nombre de la raza desde la URL de Dog API
function obtenerRazaDeUrl(url) {
  if (!url) return "desconocida";
  const partes = url.split("/breeds/");
  if (partes.length > 1) {
    const subPartes = partes[1].split("/");
    return subPartes[0].replace("-", " "); // Cambia "hound-afghan" a "hound afghan"
  }
  return "desconocida";
}

// Función para redibujar las opciones del desplegable
function actualizarDropdownFavoritos() {
  favoritosSelect.innerHTML = '<option value="">-- Razas Favoritas --</option>';
  
  for (const [raza, cantidad] of Object.entries(conteoFavoritos)) {
    const opcion = document.createElement("option");
    opcion.value = raza;
    opcion.textContent = `${raza.toUpperCase()} (${cantidad})`;
    favoritosSelect.appendChild(opcion);
  }
}

function rankearPerro(ranking) {
  const nuevaImagen = document.createElement("img");
  nuevaImagen.src = perroActual;
<<<<<<< HEAD
  
=======

>>>>>>> origin/feature/cantidad_likes
  if (ranking === "+") {
    likes++;
    countLikeEl.textContent = likes;
    perrosLikeContainer.appendChild(nuevaImagen);
    perrosLikeContainer.classList.toggle("escondido", false);
<<<<<<< HEAD
    
    // Extrae la raza e incrementa su contador
    const raza = obtenerRazaDeUrl(perroActual);
    conteoFavoritos[raza] = (conteoFavoritos[raza] || 0) + 1;
    
    // Actualiza la lista desplegable
    actualizarDropdownFavoritos();
=======
>>>>>>> origin/feature/cantidad_likes
  } else {
    dislikes++;
    countDislikeEl.textContent = dislikes;
    perrosDislikeContainer.appendChild(nuevaImagen);
    perrosDislikeContainer.classList.toggle("escondido", false);
  }

  nuevoPerro();
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

<<<<<<< HEAD
// Ejecución
=======
// Ejecución inicial
>>>>>>> origin/feature/cantidad_likes
nuevoPerro();