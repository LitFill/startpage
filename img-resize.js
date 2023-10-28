/**
 * Set the height of the image equal to the offsetHeight of the links element
 * @type {string}
 */
document.getElementById("image").style.height =
    document.getElementById("links").offsetHeight + "px";

/**
 * Elements with the .links class
 * @type {HTMLElement}
 */
const linksElement = document.getElementById("links");

/**
 * The height of the linksElement
 * @type {number}
 */
const linksHeight = linksElement.offsetHeight;

/**
 * Logs the height of the linksElement in the console
 */
console.log(linksHeight);
