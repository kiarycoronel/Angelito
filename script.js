const mensajes = [
"Todo lo que necesitas es amor. Pero un poco de chocolate de vez en cuando no hace daño.",
    "La vida es igual que el béisbol, tiene que ser planeada, tener estrategias para poder adaptarnos a cada situación a la que nos enfrentamos, para así poder avanzar en nuestro camino.",
    "Aprende del ayer, vive para hoy, aspira al mañana, descansa esta tarde.",
    "Sé tú mismo, nadie te dirá que lo estás haciendo mal.",
    "En el libro de la vida, las respuestas no están en la última página.",
    "Toda su vida intentó ser una buena persona. Muchas veces lo intentó, pero falló. Después de todo, él era solo humano, no era un perro.",
    "La vida es como una bicicleta de diez velocidades, algunos de nosotros no usamos todas las velocidades.",
    "El solo pensar en un amigo hace que bailes de felicidad, porque un amigo es aquel que te quiere a pesar de tus defectos.",
    "Si aprietas los dientes y muestras empeño, siempre tendrás una oportunidad.",
    "El secreto de la felicidad es hacer lo que te gusta, pero con quien te gusta.",
    "No tiene sentido ladrar tanto si no tienes nada que decir.",
    "No busques la felicidad en el mismo lugar donde la perdiste.",
    "La vida es como un helado, hay que disfrutarla antes de que se derrita.",
    "A veces llorar es bueno, pero reír es mejor.",
    "- Vamos a morir, Snoopy. - Cierto Charlie, pero los otros días no.",
    "La vida es más fácil cuando te sabes reír de ti mismo.",
    "El fracaso no es caer, sino quedarse donde has caído.",
    "¡Desarrollé una nueva filosofía! ¡Solo un lamento por día!",
    "Todo está bien, esa es mi nueva filosofía. - Sally",
    "La felicidad es un cachorrito calientito. - Lucy",
    "Es la naturaleza humana, todos necesitamos que nos den un beso de despedida. - Marcie",
    "Amo la humanidad, ¡es la gente a quienes no soporto! - Linus",
    "Algunas veces me quedo acostado de noche y pregunto: ‘¿Qué puedo hacer para que mi vida no pase tan rápido?’ Entonces una voz viene y me dice: ‘Intenta frenar en las curvas’. - Charlie Brown",
    "A veces me quedo acostado en la noche y me pregunto: ‘La vida es una prueba de selección múltiple o de selección simple’ Y una voz desde la oscuridad me dice ‘Sentimos decirlo pero la vida es un ensayo de mil palabras’. - Charlie Brown",
    "¿Estás deprimido amiguito? ¿Te has quedado despierto preocupado? No te preocupes, estoy aquí. La inundación pasará, la hambruna acabará, el sol saldrá mañana y siempre estaré ahí para cuidar de ti. - Charlie Brown",
    "La soledad hace que el corazón sea más cariñoso, pero hace que el resto de ti se sienta solo. - Charlie Brown",
    "Nunca cometí un error en mi vida. Pensé que lo había hecho, pero estaba equivocada. - Lucy",
    "Nunca te acuestes haciéndote preguntas que no puedes responder. - Charlie Brown",
    "No hay peso más grande que el de un gran potencial. - Linus",
    "No nada más atractivo que una buena sonrisa. - Charles M. Schulz",
    "Ningún problema es demasiado grande o tan complicado que no puedas huir de él. - Linus",
    "Di todo para tratar de comprender a la gente. ¡Ahora yo dejo que traten de comprenderme! - Charles M. Schulz",
    "La vida es como un helado, tienes que lamerlo un día a la vez. - Charlie Brown",
    "Las personas no deberían avergonzarse porque las pillen actuando como unos tontos. - Charles M. Schulz",
    "O es gripe o es amor, los síntomas son los mismos. - Charles M. Schulz",
    "Un toque en la nariz es un signo de mucho afecto. - Lucy",
    "No te preocupes por el mañana. Mañana pronto será hoy y antes que lo sepas, ¡hoy será ayer! - Charles M. Schulz",
    "Si le fuera a dar un regalo a la próxima generación, le daría a cada uno la habilidad de reírse de sí mismo. - Charles M. Schulz",
    "No seas una hoja, ¡sé un árbol! - Linus",
    "No importa en lo que creas mientras sea sincero. - Charles M. Schulz",
    "Si no puedes ganarles, coopera con ellos hasta que mueran. - Charles M. Schulz",
    "Los copos de nieve me fascinan, millones caen suavemente al suelo y ¡dicen que no hay dos iguales! Cada uno es diferente de los demás, ¡son unos individualistas accidentados! - Charles M. Schulz",
    "¿Sabes cuál es mi mejor cualidad? Creo que soy bueno para acompañar. ¡Odiaría no estar para acompañar! - Charlie Brown",
    "Este es mi reporte de cómo vivir, dicen que la mejor forma de vivir es un día a la vez. Si tratas de vivir siete días a la vez, la semana se acabará antes que lo sepas. - Charles M. Schulz",
    "No creo que Dios quiera ser adorado. Creo que la única adoración pura de Dios es amarse unos con otros y pienso que otras formas de adoración se convierten en sustituto del amor que deberíamos darnos unos con otros. - Charles M. Schulz"
];

const snoopyGifs = [
    "resourses/snoopy1.gif",
    "resourses/snoopy2.gif",
    "resourses/snoopy3.gif",
    "resourses/snoopy4.gif",
    "resourses/snoopy5.gif",
    "resourses/snoopy6.gif",
    "resourses/snoopy7.gif",
    "resourses/snoopy8.gif",
    "resourses/snoopy9.gif",
    "resourses/snoopy91.gif"
];

function obtenerMensaje() {
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    const gif = snoopyGifs[Math.floor(Math.random() * snoopyGifs.length)];
    
    document.getElementById("mensaje").innerText = mensaje;
    const gifElement = document.getElementById("gif");
    gifElement.src = gif;
    gifElement.style.display = "block";
}
