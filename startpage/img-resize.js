document.getElementById("image").style.height =
    document.getElementById("links").offsetHeight + "px";

const linksElement = document.getElementById("links");
const linksHeight = linksElement.offsetHeight;

console.log(linksHeight);

document
    .querySelector(".refresh")
    .addEventListener("click", () => location.reload());
