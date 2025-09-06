// Datos de las encuestas (simulando la respuesta de una API)
const encuestas = [
    {
        "EncuestaID": 1,
        "Nombre": "Encuesta de Conocimiento y Dominio",
        "Descripcion": "Evalúa si el catedrático demuestra dominio y usa recursos adecuados.",
        "Preguntas": [
            {
                "PreguntaID": 1,
                "TextoPregunta": "¿Qué recursos tecnológicos brinda el catedrático para impartir el curso?",
                "Opciones": [
                    { "OpcionID": 1, "TextoOpcion": "Ejercicios prácticos resueltos" },
                    { "OpcionID": 2, "TextoOpcion": "Presentaciones y diapositivas" },
                    { "OpcionID": 3, "TextoOpcion": "Recursos tecnológicos como APIs o simuladores" },
                    { "OpcionID": 4, "TextoOpcion": "Videos explicativos" },
                    { "OpcionID": 5, "TextoOpcion": "Foros o plataformas de discusión" },
                    { "OpcionID": 6, "TextoOpcion": "No brinda nada" },
                    { "OpcionID": 91, "TextoOpcion": "Aplicaciones de ejemplo" }
                ]
            },
            {
                "PreguntaID": 2,
                "TextoPregunta": "¿Qué estrategias usa para explicar los temas?",
                "Opciones": [
                    { "OpcionID": 7, "TextoOpcion": "Ejemplos prácticos en clase" },
                    { "OpcionID": 8, "TextoOpcion": "Analogías y casos reales" },
                    { "OpcionID": 9, "TextoOpcion": "Demostraciones en vivo" },
                    { "OpcionID": 10, "TextoOpcion": "Material escrito complementario" },
                    { "OpcionID": 11, "TextoOpcion": "Sesiones grabadas" },
                    { "OpcionID": 12, "TextoOpcion": "No utiliza ninguna estrategia clara" }
                ]
            }
        ]
    },
    {
        "EncuestaID": 2,
        "Nombre": "Encuesta de Metodología y Evaluación",
        "Descripcion": "Evalúa la claridad, organización y métodos de evaluación del catedrático.",
        "Preguntas": [
            {
                "PreguntaID": 3,
                "TextoPregunta": "¿Qué materiales de apoyo entrega en clase?",
                "Opciones": [
                    { "OpcionID": 13, "TextoOpcion": "Guías de estudio" },
                    { "OpcionID": 14, "TextoOpcion": "Banco de ejercicios" },
                    { "OpcionID": 15, "TextoOpcion": "Manuales o tutoriales" },
                    { "OpcionID": 16, "TextoOpcion": "Acceso a bibliografía digital" },
                    { "OpcionID": 17, "TextoOpcion": "Plantillas de trabajo" },
                    { "OpcionID": 18, "TextoOpcion": "No entrega materiales" }
                ]
            },
            {
                "PreguntaID": 4,
                "TextoPregunta": "¿Qué herramientas usa para evaluar el aprendizaje?",
                "Opciones": [
                    { "OpcionID": 19, "TextoOpcion": "Exámenes cortos" },
                    { "OpcionID": 20, "TextoOpcion": "Quices prácticos en clase" },
                    { "OpcionID": 21, "TextoOpcion": "Trabajos de investigación" },
                    { "OpcionID": 22, "TextoOpcion": "Evaluaciones con software especializado" },
                    { "OpcionID": 23, "TextoOpcion": "Rúbricas de evaluación claras" },
                    { "OpcionID": 24, "TextoOpcion": "No utiliza herramientas de evaluación" }
                ]
            }
        ]
    },
    {
        "EncuestaID": 3,
        "Nombre": "Encuesta de Actitud y Comunicación",
        "Descripcion": "Evalúa la puntualidad, el respeto y la comunicación del catedrático.",
        "Preguntas": [
            {
                "PreguntaID": 5,
                "TextoPregunta": "¿Qué medios utiliza para mantener actualizados los contenidos?",
                "Opciones": [
                    { "OpcionID": 25, "TextoOpcion": "Lecturas recientes de la materia" },
                    { "OpcionID": 26, "TextoOpcion": "Enlaces a artículos académicos" },
                    { "OpcionID": 27, "TextoOpcion": "Uso de software actualizado" },
                    { "OpcionID": 28, "TextoOpcion": "Referencias a normativas vigentes" },
                    { "OpcionID": 29, "TextoOpcion": "Comparación con tendencias actuales" },
                    { "OpcionID": 30, "TextoOpcion": "No actualiza los contenidos" }
                ]
            }
        ]
    }
];

// Función para mostrar las encuestas en la página
function mostrarEncuestas() {
    const contenedor = document.getElementById('contenedor-encuestas');

    encuestas.forEach(encuesta => {
        // Crear el contenedor para esta encuesta
        const encuestaDiv = document.createElement('div');
        encuestaDiv.className = 'encuesta';

        // Añadir el título y la descripción
        encuestaDiv.innerHTML = `
            <h2>${encuesta.Nombre}</h2>
            <p>${encuesta.Descripcion}</p>
        `;

        // Añadir las preguntas
        encuesta.Preguntas.forEach(pregunta => {
            const preguntaDiv = document.createElement('div');
            preguntaDiv.className = 'pregunta';

            let opcionesHTML = '';
            pregunta.Opciones.forEach(opcion => {
                opcionesHTML += `
                    <div>
                        <input type="radio" name="pregunta-${pregunta.PreguntaID}" id="opcion-${opcion.OpcionID}" value="${opcion.OpcionID}">
                        <label for="opcion-${opcion.OpcionID}">${opcion.TextoOpcion}</label>
                    </div>
                `;
            });

            preguntaDiv.innerHTML = `
                <p><strong>${pregunta.TextoPregunta}</strong></p>
                ${opcionesHTML}
            `;
            encuestaDiv.appendChild(preguntaDiv);
        });

        contenedor.appendChild(encuestaDiv);
    });
}

// Llamar a la función para que se ejecute al cargar la página
mostrarEncuestas();