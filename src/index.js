 /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV FUNCTIONALITY >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

// JQUERY CONSTANTS

const $nav = $('nav');
const $nav_button = $('.nav_button');     //* colection of button with class="nav_button"
const $div_tab = $('.div_tab');   // *collection of divs with class="div_tab
const $hamburger = $('.hamburger') // ! collection of buttons with class="hamburger", should I leave a unique hamburger button
const $exit_menu = $('#exit_menu') 


import {setSuitableNav, resizeNav, hamburgerFunctionality, exit_menuFunctionality, nav_buttonsFunctionality} from './modules/nav';

window.onload = setSuitableNav();

$(window).on('resize', () => {resizeNav()});

$hamburger.click( () => {
    hamburgerFunctionality()});

$exit_menu.click(() => {
    exit_menuFunctionality()});

$nav_button.not($exit_menu).click((e) => {
    nav_buttonsFunctionality(e)});





/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV FUNCTIONALITY >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


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

//  * PROJECTS.JS

const $moreInfo= $('.moreInfo');
const $lessInfo = $('.lessInfo');
const $github_repo = $('.github_repo');
const $description = $('.description');
const $fingerTouch = $('.fingerTouch');
const $project_entry = $('.project_entry');

const project_entry = document.querySelector('.project_entry');






// * _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- more info button functionaliy-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- 
$moreInfo.click(function(){
    $(this).addClass('hidden');
    if( $project_entry.find('.columnLeft').length === 0 ){ 
        console.log($(this).parent().find('.extraInfo'));               // check if has to go one or two levels up to target the parent
        $(this).parent().find('.extraInfo').removeClass('hidden');    
    } else { 
        $(this).parent().parent().find('.extraInfo').removeClass('hidden');
        $(this).parent().parent().addClass('expand_extra_info');
    }
   
});


// * _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- less info button functionaliy-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- 
$lessInfo.click(function(){
    $(this).siblings('.moreInfo').removeClass('hidden');
    if( $project_entry.find('.columnLeft').length === 0 ){            // check if has to go one or two levels up to target the parent
        $(this).parent().find('.extraInfo').addClass('hidden');    
    } else { 
        $(this).parent().parent().find('.extraInfo').addClass('hidden');
        $(this).parent().parent().removeClass('expand_extra_info');
    }
});


// * on loading and resize check the viewport orientation and if it is landscape show Extra information in the project card._-_-_-_-_-_-_-_-_-_-_-_-_-_

$(window).on('load resize' , function() {       
    if  (($(window).width() < $(window).height() && $(window).width() < 700 )
    || ($(window).width() > $(window).height() && $(window).width() < 860 ))
    {   
                $moreInfo.removeClass('hidden');
                $description.addClass('hidden');
                $github_repo.addClass('hidden');
                
    } else {
                $moreInfo.addClass('hidden');
                $description.removeClass('hidden');
                $github_repo.removeClass('hidden');
    }
});

// * on loading and resize 
// * if the screen if big enough:
// * check if there is not any .columnLeft and then 
// * add two .columnLeft divs to project_entry div and insert .columnLeft_element to .columnLeft div
// * otherwise detach .columnLeft_element from .columnLeft and remove .columnLeft.

// * otherwise detach .columnLeft_element from .columnLeft and remove .columnLeft

$(window).on('load resize' , function() {       
    if ( $(window).width() >= 700 || ($(window).width() > $(window).height()) ) {
        if( $project_entry.find('.columnLeft').length === 0 ){
            $project_entry.prepend('<div class="columnLeft"></div>','<div class="columnRight"></div>');
            $project_entry.each(function(index) {
                $(this).children().filter('.columnLeft').prepend($(this).children().filter('.columnLeft_element'));
                $(this).children().filter('.columnRight').prepend($(this).children().filter('.columnRight_element'));
            });
        } 
    }
    else {
        if($project_entry.find('.columnLeft').length !== 0){
            $('.columnLeft_element').unwrap();
            $('.columnRight_element').unwrap();
        }
    }
});


// * on loading and resize check whether the device is touchable adding or removing the fingerTouch icon._-_-_-_-_-_-_-_-_-_-_-_-_-_
function isTouchDevice(Device) {
    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0));
  }

  $(window).on('load resize' , function() {       
    if( isTouchDevice($(window))) { $fingerTouch.removeClass('hidden')} 
    else {$fingerTouch.addClass('hidden')}
});

// * TYPEWRITER.JS 

import {typewritePlaying} from './modules/typewriter';

window.onload = typewritePlaying();

