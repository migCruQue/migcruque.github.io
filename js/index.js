// * INDEX.JS

let mouseCursor = document.querySelector("#cursor");
let index = document.querySelector("#index");

window.addEventListener("mousemove", cursor);


function cursor (e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}


index.addEventListener("mouseover", () => {mouseCursor.classList.add('cursor_index')});
    
index.addEventListener("mouseleave", () => {mouseCursor.classList.remove('cursor_index')});
