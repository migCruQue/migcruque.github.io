

// import 'bootstrap';
import * as bootstrap from 'bootstrap';


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV FUNCTIONALITY >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

const $nav = $('nav');

let tabReference = document.querySelector('.tab-reference');
let tabPaneActive = document.querySelector('.tab-pane.active');
let tabPaneID = tabPaneActive.getAttribute("id");

console.log(tabPaneID);

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
$(".navbar-toggler").on("click", function() {
   $nav.hasClass("overlapping") ? $nav.removeClass("overlapping") : $nav.addClass("overlapping");
  });


let isCurrentWidthSmall = ($(window).width()) <= 992 ;  // check the window screen size and assing True or False whether the screen size is smaller than 992px

$(window).on('resize', () => {
    if( $(window).width() > 992  && $nav.hasClass("ovelapping")){  // Remove .overlapping from the nav when resize to a big screen.
        $nav.removeClass("ovelapping")}

    isCurrentWidthSmall = ($(window).width()) <= 992; 
});


const $navLinks = $('.nav-item');
const navbarCollapse  = document.getElementById('navbarSupportedContent');

function menuToggle() {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
    bsCollapse.toggle();
}

$navLinks.on("click", (e) => {    // Use the toggle method in a new boostrap.Collapse(menuToggle)  
    let buttonACAttr = e.target.getAttribute("aria-controls");
    if(buttonACAttr !== tabPaneID){
        tabReference.setAttribute("src", imageTabData[buttonACAttr].src);
        tabReference.setAttribute("alt", imageTabData[buttonACAttr].alt);
        tabPaneID = buttonACAttr;
        console.log(tabPaneID, buttonACAttr);
    }
    $nav.hasClass("ovelapping") ? $nav.removeClass("ovelapping") : $nav.addClass("ovelapping");
    menuToggle();//to collapse the navbar-collapse when any button from the menu is click
    
});







/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV FUNCTIONALITY >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


// * CONTACT_ME.JS


//Movement Animation to happen
const cards = document.querySelectorAll('.contact_card');
const circle_backgroun = document.querySelector('.circle_background');
const title = document.querySelector('.title');
const contact_logo = document.querySelector('.contact_logo img');

// Moving Animation Event
// card.addEventListener('mouseover', (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });


// Animate In
cards.forEach(card => {
    card.addEventListener("mouseenter", (e) => {
        // card.style.transform = `rotateY(25deg) rotateX(25deg)`;
        // //Pop out
        // title.style.transform = "translateZ(150px)";
        contact_logo.style.transform = "translateZ(200px) rotateZ( -45deg)";
    });
});


cards.forEach(card => {
    card.addEventListener("mouseleave", (e) => {
        // card.style.transition = "all 0.5a ease";
        // card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        // //Pop back
        // title.style.transform = "translateZ(0px)";
        contact_logo.style.transform = "translateZ(0px) rotateZ( 0deg)";
    });
});


//Animate Out
// card.addEventListener('mouseleave', (e) => {
//   card.style.transition = "all 0.5a ease";
//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   //Pop back
//   title.style.transform = "translateZ(0px)";
//   contact_logo.style.transform = "translateZ(0px) rotateZ( 0deg)";
// });



// * TYPEWRITER.JS 

import {typewritePlaying} from './modules/typewriter';

window.onload = typewritePlaying();

