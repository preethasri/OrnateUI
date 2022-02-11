var btn = document.querySelector(".live-demo-button")
var modal = document.querySelector(".modal")
var close = document.querySelector("#cancel-icon")

btn.addEventListener("click", () => {
    modal.style.display = "block";
})
close.addEventListener("click", () => {
    modal.style.display = "none";
})