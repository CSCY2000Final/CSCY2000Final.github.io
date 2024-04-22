var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h3");

function menu() {
    var menu = document.getElementById("nav_links");
    if (menu.style.display === "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block";
    }
}

function ans1() {
    heading.style.display = "block";
    answer.textContent = "True!"
}

function ans2() {
    heading.style.display = "block";
    answer.textContent = "Trees absorb carbon dioxide, removing and storing the carbon while releasing the oxygen back into the air. In one year, an acre of mature trees absorbs the amount of carbon dioxide that a car produces that has driven 26,000 miles.";
}

function ans3() {
    heading.style.display = "block";
    answer.textContent = "Around 73,000 species"
}