document.addEventListener("DOMContentLoaded", function() {
    const addServerButton = document.querySelector(".add-server-button");
    const exploreServersButton = document.querySelector(".explore-servers-button");

    addServerButton.addEventListener("click", function() {
        window.open("add_server.html", "_blank");
    });

    exploreServersButton.addEventListener("click", function() {
        window.open("search_server.html", "_blank");
    });
});
    const addServerButton = document.querySelector(".add-server-button");
    const exploreServersButton = document.querySelector(".explore-servers-button");

    addServerButton.addEventListener("click", function() {
        alert("Añadir un Servidor");
    });

    exploreServersButton.addEventListener("click", function() {
        alert("Explorar Servidores");
    });