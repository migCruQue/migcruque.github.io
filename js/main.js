/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV FUNCTIONALITY >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

// JQUERY CONSTANTS

const $nav = $('nav');
const $nav_button = $('.nav_button');     //* colection of button with class="nav_button"
const $div_tab = $('.div_tab');   // *collection of divs with class="div_tab
const $hamburger = $('.hamburger') // ! collection of buttons with class="hamburger", should I leave a unique hamburger button
const $exit_menu = $('#exit_menu') 



$( window ).on('load', function() {          //on loading set the nav with the class hidden or grid depending on the window viewport width
    if ($(window).width() >= 1000) {$nav.addClass('flex')} 
    else  {$nav.addClass('hidden')}
<<<<<<< HEAD
=======
});

let currentWidth = $(window).width();  //initialize the variable currentWidth to use in the resize handler

$( window ).on('resize', function() {   // when the window is resize check if the width is equal or greater than 1000 to remove class="hidden"
    if ($(window).width() >= 1000) {$nav.removeClass('hidden')}
    if ($(window).width() < 1000) {       // check if the window width was greater than 1000 if so it add the class="hidden" to the nav element.
        if(currentWidth >= 1000){$nav.addClass('hidden')}
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
>>>>>>> essential_improvements
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

    if($(window).width() < 1000){$nav.addClass('hidden').removeClass('flex')}  // Check if the the viewport width is less than 1000 and set up the nav to display none.
    $nav_button.removeClass('hidden');
    $(`#${this.id}`).addClass('hidden');
    const tab_id = this.id.replace('_button', '');
    $div_tab.addClass('hidden').removeClass('flex');
    $(`#${tab_id}`).removeClass('hidden').addClass('flex');
    $hamburger.removeClass('hidden');
});

$nav_button.not($exit_menu).click(function(){

    if($(window).width() < 1000){$nav.addClass('hidden').removeClass('flex')}  // Check if the the viewport width is less than 1000 and set up the nav to display none.
    $nav_button.removeClass('hidden');
    $(`#${this.id}`).addClass('hidden');
    const tab_id = this.id.replace('_button', '');
    $div_tab.addClass('hidden').removeClass('flex');
    $(`#${tab_id}`).removeClass('hidden').addClass('flex');
    $hamburger.removeClass('hidden');
});





/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV FUNCTIONALITY >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/






// CUSTOMIZE THE MENU WHEN IT IS EXPANDED THROUGH THE TOOGLER BUTTON.



// $(nav).mouseover(function(){
//   $(this).addClass('visible')
// }).mouseout(function(){
//   $(this).removeClass('visible')
// });

// CUSTOMIZE THE MENU WHEN IT IS EXPANDED THROUGH THE TOOGLER BUTTON.





            // CODE TO REVIEW

// ?????????????????????????????????????????????????????????
// ?????????????????????????????????????????????????????????
// ?????????????????????????????????????????????????????????





// TRYING TO FIX THE SIZE OF THE MAIN DIV

// set the main div height to the window inner height.
// $('main').height(Math.floor(window.innerHeight * 0.87));

// set the main div height to the window inner height in the contact me tab.
// $('div#contact-me').height(Math.floor($(window).height() * 0.95));

// TRYING TO FIX THE SIZE OF THE MAIN DIV



// POSITIONING THE BOX(WHERE I DISPLAY SOME MESSAGES) IN THE MAIN INDEX.

// $('#box').offset({top: Math.floor($(window).height() * 0.7)});



// EVENT HANDLER TRIGGERS EVERY TIME THE WINDOWS IS RESIZE.
// $( window ).resize(function() {

//     if($("a[href='index.html']").hasClass('currentTab')){
//       $('#box').offset({top: Math.floor($(window).height() * 0.7)});

//     }

//     if($("a[href='contactMe.html']").hasClass('currentTab')){
//       $('#contact-me-box').offset({top: Math.floor($(window).height() * 0.25)});

//     }

// });
