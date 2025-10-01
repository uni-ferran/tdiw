// js/funcions.js
// 1–6. confirmaRegistre: alert, console log, reemplazar formulario y return false

function confirmaRegistre() {
    // 2. Ventana alert
    alert("Registrant usuari")
    // 3. Mensaje en la consola
    console.log("Registrant usuari");
    // 4. Reemplazar el contenido del div formDiv por un párrafo con clase important
    let formDiv = document.getElementById("formDiv")
    formDiv.innerHTML = "<p class='important'>Usuari registrat amb èxit</p>";
    return false // 5. Evitar el envío del formulario
    }
