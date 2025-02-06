const mensajes = [
    "Todo lo que necesitas es amor. Pero un poco de chocolate de vez en cuando no hace daño.",
    "La vida es igual que el béisbol, tiene que ser planeada, tener estrategias para poder adaptarnos a cada situación a la que nos enfrentamos, para así poder avanzar en nuestro camino.",
    "Aprende del ayer, vive para hoy, aspira al mañana, descansa esta tarde.",
    "Sé tú mismo, nadie te dirá que lo estás haciendo mal.",
    "En el libro de la vida, las respuestas no están en la última página."
];

const snoopyGifs = [
    "resourses/snoopy1.gif",
    "resourses/snoopy2.gif",
    "resourses/snoopy3.gif",
    "resourses/snoopy4.gif",
    "resourses/snoopy5.gif"
];

function obtenerMensaje() {
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    const gif = snoopyGifs[Math.floor(Math.random() * snoopyGifs.length)];
    
    document.getElementById("mensaje").innerText = mensaje;
    const gifElement = document.getElementById("gif");
    gifElement.src = gif;
    gifElement.style.display = "block";
}
