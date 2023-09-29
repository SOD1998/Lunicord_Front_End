document.getElementById("confirm-button").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const birthdate = document.getElementById("birthdate").value;

    if (email && username && name && password && birthdate) {
        alert("Registro exitoso");
    } else {
       alert("Por favor, complete todos los campos.");
        }
});