document.getElementById("login-button").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        //alert("Ingresado con éxito");
    } else {
        alert("Por favor, complete todos los campos.");
    }
});
