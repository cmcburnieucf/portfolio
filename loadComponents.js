function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load navigation and footer
window.onload = function () {
    loadComponent("website-navbar", "navfile.html");
    //loadComponent("website-footer", "footerfile.html");
};