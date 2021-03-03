

let mouseCursor = document.querySelector("#cursor");
let nav = document.querySelector("nav");

window.addEventListener("mousemove", cursor);

function cursor (e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}


nav.addEventListener("mouseover", () => {mouseCursor.classList.remove('cursor_index')});
    
nav.addEventListener("mouseleave", () => {mouseCursor.classList.add('cursor_index')});
