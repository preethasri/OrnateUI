function openBar() {
    document.getElementById("sidebar-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("home").style.marginLeft = "250px"
}

function closeBar() {
    document.getElementById("sidebar-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("home").style.marginLeft = "0"
}