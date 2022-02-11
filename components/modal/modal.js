var btn = document.querySelector(".live-demo-button")
var modal = document.querySelector(".modal")
var close = document.querySelector("#cancel-icon")

btn.addEventListener("click", () => {
    modal.style.display = "block";
})
close.addEventListener("click", () => {
    modal.style.display = "none";
})

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