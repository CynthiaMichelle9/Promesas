async function obtenerTitulosAlbums() {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    try {
        const response = await fetch(url);
        const data = await response.json();


        data.slice(0, 20).forEach(album => {
            console.log(album.title);
        });
    } catch (error) {
        console.error('Error al obtener los títulos de los álbumes:', error);
    }
};

function enviarMensaje() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000);
    });
};

// Función asíncrona para manejar el envío del mensaje después de 3 segundos
async function enviarMensajeDespuesDe3Segundos() {
    try {
        const mensaje = await enviarMensaje(); // Esperar a que la promesa se resuelva
        console.log(mensaje); // Mostrar el mensaje en la consola
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
    }
};


obtenerTitulosAlbums();

enviarMensajeDespuesDe3Segundos();
