function handleClick() {
    var showToast = document.getElementById("toast-live")
    showToast.className = 'show';
    setTimeout(function() { showToast.className = showToast.className.replace("show", ""); }, 5000);
}