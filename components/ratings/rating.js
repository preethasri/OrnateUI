const starRatings = [...document.getElementsByClassName("star-rating")];

function ratingReview(stars) {
    const starActive = "star-rating fas fa-star"
    const starInactive = "star-rating far fa-star"
    const starLength = stars.length;

    let i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);

            if (star.className === starInactive) {
                for (i; i >= 0; --i) stars[i].className = starActive

            } else {
                for (i; i < starLength; ++i) stars[i].className = starInactive;
            }
        };

    })
}
ratingReview(starRatings)

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