// Array para guardar los nombres
let amigos = [];
// variables o contenedores
let input = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
// Función para añadir un amigo
function agregarAmigo() {
    
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor escribe un nombre");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = ""; // Limpia el campo
    input.focus();
}

// Función para mostrar los nombres en la lista
function mostrarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;


      // 🔹 Limpiar la lista y el array después del sorteo

    amigos = []; // Vacía el array
    listaAmigos.innerHTML = ""; // Limpia la lista en pantalla

}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
