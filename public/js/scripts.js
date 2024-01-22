document.addEventListener("DOMContentLoaded", function () {
    // Tu código aquí
    document.getElementById("copy-btn").addEventListener("click", () => {
        let texto = "andres.escala.344@gmail.com";
        navigator.clipboard
            .writeText(texto)
            .then(() => {
                showNotification();
                setTimeout(() => {
                    hideNotification();
                }, 2000);
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