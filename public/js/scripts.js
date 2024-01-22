document.addEventListener("DOMContentLoaded", function () {
    // Tu código aquí
    document.getElementById("copy-btn").addEventListener("click", () => {
        alert("h");
        let texto = "andres.escala.344@gmail.com";
        console.log(navigator)
        navigator.clipboard
            .writeText(texto)
            .then(() => {
                console.log("¡Texto copiado al portapapeles!");
            })
            .catch((err) => {
                console.error("Error al intentar copiar el texto:", err);
            });
    });
});

function showNotification(){
    document.getElementById("notification").classList.remove("hidden");
}

function hideNotification(){
    document.getElementById("notification").classList.add("hidden");
}