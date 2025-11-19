const API_URL = "https://ceav-backend.onrender.com/api/ceav/responder";

async function generar() {
    const mensaje = document.getElementById("mensaje").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const curso = document.getElementById("curso").value;

    if (!mensaje) {
        alert("Por favor ingresa el mensaje del cliente.");
        return;
    }

    const payload = {
        pregunta: mensaje,
        ciudad: ciudad || null,
        curso: curso || null
    };

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const data = await res.json();

        const respuestaBox = document.getElementById("respuesta");
        respuestaBox.style.display = "block";
        respuestaBox.innerText = data.respuesta || "No se pudo generar respuesta.";

    } catch (err) {
        alert("Error al conectar con el servidor.");
        console.error(err);
    }
}
