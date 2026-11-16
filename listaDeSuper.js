const listaDeSuper = [];

listaDeSuper.push("leche", "pan", "huevos", "manzanas");

const primerProducto = listaDeSuper[0];
const ultimoElemento = listaDeSuper.length - 1;
const ultimoProducto = listaDeSuper[ultimoElemento];

listaDeSuper.push("arroz", "queso");
listaDeSuper.unshift("aceite", "café");

const longitudAntesDeSacar = listaDeSuper.length;
const noHabia = listaDeSuper.pop();
const comprado = listaDeSuper.pop();
const longitudActual = listaDeSuper.length;

function logItems(arreglo) {
	arreglo.forEach((producto, indice) => {
		console.log(`${indice}: ${producto}`);
	});
}

while (typeof prompt === "function") {
	const comando = prompt('Elegí un comando: "nuevo", "listar", "borrar" o "salir".');

	if (comando === null || comando.trim().toLowerCase() === "salir") {
		break;
	}

	switch (comando.trim().toLowerCase()) {
		case "nuevo": {
			const producto = prompt("¿Qué producto querés agregar?");

			if (producto !== null && producto.trim() !== "") {
				listaDeSuper.push(producto.trim());
				console.log(`Se agregó: ${producto.trim()}`);
			}
			break;
		}
		case "listar":
			logItems(listaDeSuper);
			break;
		case "borrar": {
			const indice = Number(prompt("Ingresá el índice del producto a borrar:"));

			if (Number.isInteger(indice) && indice >= 0 && indice < listaDeSuper.length) {
				const [productoEliminado] = listaDeSuper.splice(indice, 1);
				console.log(`Se eliminó: ${productoEliminado}`);
			} else {
				console.log("El índice no es válido.");
			}
			break;
		}
		default:
			console.log('Comando no reconocido. Usá "nuevo", "listar", "borrar" o "salir".');
	}
}
