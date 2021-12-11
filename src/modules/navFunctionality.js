// import 'bootstrap';
import * as bootstrap from 'bootstrap';


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

const nav = document.querySelector('nav');

function togglerOverlapping() {
    nav.classList.contains("overlapping") ? nav.classList.remove("overlapping") : nav.classList.add("overlapping");
};


let isCurrentWidthSmall = window.innerWidth <= 992 ;  // check the window screen size and assing True or False whether the screen size is smaller than 992px

function resizeOverlapping(){
    if( window.innerWidth > 992  && nav.classList.contains("overlapping")){  // Remove .overlapping from the nav when resize to a big screen.
        nav.classList.remove("overlapping")}
    isCurrentWidthSmall = window.innerWidth <= 992; 
}

const tabReference = document.querySelector('.tab-reference');
const tabPaneActive = document.querySelector('.tab-pane.active');
let tabPaneID = tabPaneActive.getAttribute("id")

const navbarCollapse  = document.getElementById('navbarSupportedContent');

function menuToggle() {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
    bsCollapse.toggle();
}

function navLinksFunctionality(e) {    
    let buttonACAttr = e.target.getAttribute("aria-controls"); // set the src and attr attributes tab reference image when a nav link is click
    if(buttonACAttr !== tabPaneID){
        tabReference.setAttribute("src", imageTabData[buttonACAttr].src);
        tabReference.setAttribute("alt", imageTabData[buttonACAttr].alt);
        tabPaneID = buttonACAttr;
    }

    nav.classList.contains("overlapping") ? nav.classList.remove("overlapping") : nav.classList.add("overlapping"); // remove or add the overlapping class to the menu in small screens.
    
    menuToggle();//to collapse the navbar-collapse when any button from the menu is click);a
}

export  {imageTabData, togglerOverlapping, resizeOverlapping, navLinksFunctionality}