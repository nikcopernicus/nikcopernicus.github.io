(function() {
    let startTime = (new Date).getTime();
    window.addEventListener('load', function() {
        let endTime = (new Date).getTime();
        document.getElementById("page-load-text").textContent = "Загрузка " + (endTime - startTime) + "мс";
    });
})();

window.onload = function () {
    if(window.location.toString().includes("index")) {
        document.getElementById("index-link").className += "active-menu-item"
        document.getElementById("index-link-p").className += "active-menu-item"
    } else if(window.location.toString().includes("contacts")) {
        document.getElementById("contacts-link").className += "active-menu-item"
        document.getElementById("contacts-link-p").className += "active-menu-item"
    }
}