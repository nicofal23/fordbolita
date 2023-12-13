document.addEventListener('DOMContentLoaded', function () {
    let data; // Variable para almacenar los datos cargados desde el archivo JSON

    // Cargar datos desde el archivo JSON
    fetch('mansilla.json')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

    // Definir la función buscarCodigo
    function buscarCodigo() {
        const codigoInput = document.querySelector('.searchTerm').value;
        const producto = data.find(item => item.codigo == codigoInput);

        if (producto) {
            const precioConPorcentaje = Math.ceil(producto.precio * 1.0989);
            const precioCon50PorCiento = Math.ceil(precioConPorcentaje * 1.5);

            // Configurar las opciones de SweetAlert con estilo y posición
            const swalOptions = {
                title: `Código: ${producto.codigo}`,
                text: `Descripción: ${producto.descripcion}\nPrecio: $${precioCon50PorCiento.toFixed(2)}`,
                icon: 'success',
                position: 'absolute', // Establecer la posición en absolute
                customClass: {
                    popup: 'custom-swal-popup', // Clase personalizada para el contenedor
                    title: 'custom-swal-title', // Clase personalizada para el título
                    content: 'custom-swal-content', // Clase personalizada para el contenido
                },
                buttonsStyling: false, // Desactivar estilos predeterminados de los botones
            };

            swal(swalOptions);
        } else {
            swal({
                title: 'Error',
                text: 'Código no encontrado',
                icon: 'error',
                position: 'absolute',
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    content: 'custom-swal-content',
                },
                buttonsStyling: false,
            });
        }
    }

    // Obtener el botón de búsqueda
    const searchButton = document.querySelector('.searchButton');

    // Agregar un listener al botón de búsqueda
    searchButton.addEventListener('click', function () {
        buscarCodigo();
    });
});
