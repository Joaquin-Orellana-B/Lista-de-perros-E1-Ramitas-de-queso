const perroActualElement = document.getElementById("perroActual");
const spinner = document.getElementById("spinner");
const perrosLikeContainer = document.getElementById("perrosLikeContainer");
const perrosDislikeContainer = document.getElementById("perrosDislikeContainer");
const favoritosSelect = document.getElementById("favoritosSelect"); // <--- Nuevo elemento HTML

perrosLikeContainer.classList.toggle("escondido");
perrosDislikeContainer.classList.toggle("escondido");

let perroActual;
const conteoFavoritos = {}; // <--- Guardará { "beagle": 2, "boxer": 1 }

document.getElementById("like").addEventListener("click", () => {
  rankearPerro("+");
});
document.getElementById("dislike").addEventListener("click", () => {
  rankearPerro("-");
});
document.getElementById("saltear").addEventListener("click", nuevoPerro);
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
  
  if (ranking === "+") {
    perrosLikeContainer.appendChild(nuevaImagen);
    perrosLikeContainer.classList.toggle("escondido", false);
    
    // Extrae la raza e incrementa su contador
    const raza = obtenerRazaDeUrl(perroActual);
    conteoFavoritos[raza] = (conteoFavoritos[raza] || 0) + 1;
    
    // Actualiza la lista desplegable
    actualizarDropdownFavoritos();
  } else {
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

// Ejecución
nuevoPerro();