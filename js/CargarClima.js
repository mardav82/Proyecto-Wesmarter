// cargarClima.js — Widget de clima reutilizable
// Usalo en cualquier página con: <div id="clima-container"></div> + <script src="js/cargarClima.js"></script>

function cargarClima() {
    const container = document.getElementById('clima-container');
    if (!container) return;

    container.innerHTML = `
        <div class="clima">
            <h3 id="ciudad"></h3>
            <p>Temperatura:</p>
            <p id="contenido"></p>
            <p>Grados</p>
            <img id="imagen" alt="clima">
        </div>
    `;

    var url = "https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=7960d229cedb00be75db9e6cf4628823&lang=es&units=metric";

    fetch(url)
        .then(res => {
            if (res.ok) return res.json();
            throw new Error("Error en la respuesta");
        })
        .then(data => {
            document.getElementById('ciudad').innerHTML = data.name;
            document.getElementById('contenido').innerHTML = Math.round(data.main.temp);
            const icono = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.getElementById('imagen').setAttribute('src', icono);
        })
        .catch(error => {
            console.error("Error clima:", error);
            container.innerHTML = '<div class="clima"><p>Clima no disponible</p></div>';
        });
}

cargarClima();