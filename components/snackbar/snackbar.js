function handleClick() {
    var showToast = document.getElementById("toast-live")
    showToast.className = 'show';
    setTimeout(function() { showToast.className = showToast.className.replace("show", ""); }, 5000);
}

function openBar() {
    document.getElementById("sidebar-menu").style.width = "250px";
    document.getElementById("heading").style.marginLeft = "250px";
    document.getElementById("container").style.marginLeft = "250px"
    document.getElementById("open-Btn").style.marginLeft = "250px";

}

function closeBar() {
    document.getElementById("sidebar-menu").style.width = "0";
    document.getElementById("heading").style.marginLeft = "0";
    document.getElementById("container").style.marginLeft = "0";
    document.getElementById("open-Btn").style.marginLeft = "0px";
}