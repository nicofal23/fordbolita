document.addEventListener('DOMContentLoaded', function () {
    // Definir la función buscarCodigo
    function buscarCodigo(datos) {
        const codigoInput = document.getElementById('codigoInput').value;
        const producto = datos.find(item => item.codigo == codigoInput);

        if (producto) {
            const precioConPorcentaje = producto.precio * 1.0989; // Añadir el 9.89%
            swal({
                title: `Código: ${producto.codigo}`,
                text: `Descripción: ${producto.descripcion}\nPrecio: ${precioConPorcentaje.toFixed(2)}`,
                icon: 'success'
            });
        } else {
            swal('Error', 'Código no encontrado', 'error');
        }
    }

    // Cargar datos desde el archivo JSON
    fetch('mansilla.json')
        .then(response => response.json())
        .then(data => {
            // Ejecutar la función buscarCodigo con los datos cargados
            document.getElementById('buscarButton').addEventListener('click', function() {
                buscarCodigo(data);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
