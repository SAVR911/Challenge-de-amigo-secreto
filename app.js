// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let numMax = 10;
actualizarLista = [];



function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }else if (nombres.length >= numMax) {
        alert('Se ha alcanzado el número máximo de participantes.');
    // Valida si el nombre ya fue agregado
    } else if (nombres.includes(nombre)) {
        alert('Este nombre ya ha sido agregado. Por favor ingresa un nombre diferente.');
    // Si pasa todas las validaciones, agrega el nombre y muestra mensaje de éxito
    } else {
        nombres.push(nombre);
        alert( `Nombre "${nombre}" agregado. Total de participantes: ${nombres.length}`);
    }
    document.getElementById('amigo').value = ''; // Limpia el campo de entrada
    console.log(nombres);
    actualizarLista = document.getElementById('listaAmigos');
    actualizarLista.innerHTML = '';

}

function sortearAmigo() {
    if (nombres.length < 2) {
        alert('Debes agregar al menos dos participantes para realizar el sorteo.');
        return;
    }
    // Elegir un nombre al azar
    const indice = Math.floor(Math.random() * nombres.length);
    const nombreEscogido = nombres[indice];

    mostrarNombreEscogido(nombreEscogido);

    // Limpia la lista de nombres y la lista visual para un nuevo sorteo
    nombres = [];
    document.getElementById('listaAmigos').innerHTML = '';
}

function mostrarNombreEscogido(nombre) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpia resultados anteriores
    const li = document.createElement('li');
    li.textContent = `Nombre escogido: ${nombre}`;
    resultado.appendChild(li);
}
