 /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV FUNCTIONALITY >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

// JQUERY CONSTANTS

const $nav = $('nav');
const $nav_button = $('.nav_button');     //* colection of button with class="nav_button"
const $div_tab = $('.div_tab');   // *collection of divs with class="div_tab
const $hamburger = $('.hamburger') // ! collection of buttons with class="hamburger", should I leave a unique hamburger button
const $exit_menu = $('#exit_menu') 



$(window).on('load', function() {          //on loading set the nav with the class hidden or grid depending on the window viewport width
    if ($(window).width() >= 1000) {
        $nav.removeClass('hidden').addClass('flex');
        $hamburger.addClass('hidden');
    } 
});

let currentWidth = $(window).width();  //initialize the variable currentWidth to use in the resize handler

$(window).on('resize', function() {   // when the window is resize check if the width is equal or greater than 1000 to remove class="hidden"
    if ($(window).width() >= 1000) {
        $nav.removeClass('hidden').addClass('flex');
        $hamburger.addClass('hidden');
    }
    if ($(window).width() < 1000) {       // check if the window width was greater than 1000 if so it add the class="hidden" to the nav element.
        if(currentWidth >= 1000){
            $nav.addClass('hidden');
            $hamburger.removeClass('hidden');
        }
    }
    currentWidth = $(window).width();
});

$hamburger.click(function(){
    $(this).addClass("hidden");
    $('nav').removeClass('hidden').addClass('flex');

});

$exit_menu.click(function(){
    $('.hamburger').removeClass('hidden');
    $('nav').removeClass('flex').addClass('hidden');
});


$nav_button.not($exit_menu).click(function(){
    if($(window).width() < 1000){
        $nav.addClass('hidden').removeClass('flex');// * Check if the the viewport width is less than 1000 and set up the nav to display none.
    }  
    $nav_button.removeClass('hidden'); // * Remove 'hidden' class from the button whose tab was previously selected
    $(`#${this.id}`).addClass('hidden'); // * Add class "hidden" to the currently selected button
    
    const tab_id = this.id.replace('_button', ''); // * extract the string id from id_button 
    $div_tab.addClass('hidden').removeClass('flex'); // * add the class "hidden" to all the tabs
    $(`#${tab_id}`).removeClass('hidden').addClass('flex'); //* remove class "hidden" and add the class "flex" to the current selected tab.
});





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

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

