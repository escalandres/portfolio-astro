function showNotification(){
    document.getElementById("notification").classList.remove("hidden");
}

function hideNotification(){
    document.getElementById("notification").classList.add("hidden");
}

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

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    // Iterar sobre las secciones y aplicar estilos dinámicamente
    var section = document.getElementById('home');
    var nav = document.getElementById('navbar');

    var sectionTop = section.offsetTop;

    if (scrollPosition >= sectionTop) {
        nav.classList.add('backdrop-blur-sm');
    }else{
        nav.classList.remove('backdrop-blur-sm');
    }

});

