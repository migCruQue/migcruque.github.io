

// import 'bootstrap';
import * as bootstrap from 'bootstrap';


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV FUNCTIONALITY >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

const nav = document.querySelector('nav');

let tabReference = document.querySelector('.tab-reference');
let tabPaneActive = document.querySelector('.tab-pane.active');
let tabPaneID = tabPaneActive.getAttribute("id");

const imageTabData = {
    "home": {
        "src": "./img/nav/vangogh.png",
        "alt": "vangogh painting"
    },
    "about-me": {   
        "src": "./img/nav/littleme.jpg",
        "alt": "myself when I was a child"
    },
    "education": {
        "src": "./img/nav/schooldesk.jpeg",
        "alt": "schooldesk"
    },
    "projects": {
        "src": "./img/nav/futuramaship.jpg",
        "alt": "futurama spaceship"
    },
    "contact-me": {
        "src": "./img/nav/mailbox.jpg",
        "alt": "red mailbox"
    },
};

// when hamburger toggles add or remove .overlapping (adding background-color to nav, ovelapping the body) 
const navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener("click", function() {
    console.log("navbarToggler clicked");
    nav.classList.contains("overlapping") ? nav.classList.remove("overlapping") : nav.classList.add("overlapping");
});


let isCurrentWidthSmall = window.innerWidth <= 992 ;  // check the window screen size and assing True or False whether the screen size is smaller than 992px

window.addEventListener('resize', () => {
    if( window.innerWidth > 992  && nav.classList.contains("overlapping")){  // Remove .overlapping from the nav when resize to a big screen.
        nav.classList.remove("overlapping")}
        console.log('resize done');

    isCurrentWidthSmall = window.innerWidth <= 992; 
});


const navLinks = document.querySelectorAll('.nav-item');
const navbarCollapse  = document.getElementById('navbarSupportedContent');

function menuToggle() {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
    bsCollapse.toggle();
}

navLinks.forEach(item => item.addEventListener("click", function(e) {    
    let buttonACAttr = e.target.getAttribute("aria-controls"); // set the src and attr attributes tab reference image when a nav link is click
    if(buttonACAttr !== tabPaneID){
        tabReference.setAttribute("src", imageTabData[buttonACAttr].src);
        tabReference.setAttribute("alt", imageTabData[buttonACAttr].alt);
        tabPaneID = buttonACAttr;
    }
    nav.classList.contains("overlapping") ? nav.classList.remove("overlapping") : nav.classList.add("overlapping"); // remove or add the overlapping class to the menu in small screens.
    menuToggle();//to collapse the navbar-collapse when any button from the menu is click);a
    
    })
);







/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV FUNCTIONALITY >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


// * TYPEWRITER.JS 

import {typewritePlaying} from './modules/typewriter';

window.onload = typewritePlaying();

