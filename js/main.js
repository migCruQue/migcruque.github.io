/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV FUNCTIONALITY >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

// When the page loads the #nav_links is given the class="links_hidden" which set display to none
$( window ).on( "load", function(){
    $('#nav_links').addClass('links_hidden');
 });




//Set up a click event handler in the iconblock element adding the class="expanded" to the nav element.
// Also toggles the nav_links div with the class="links_visible" or class="links_hidden"

$('.iconblock').click(function(){
if($('nav').hasClass('expanded')) {
    $('nav').removeClass('expanded');
    $('#nav_links').removeClass('links_visible').addClass('links_hidden');
} else {
    $('nav').addClass('expanded');
    $('#nav_links').removeClass('links_hidden').addClass('links_visible');
}
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

// POSITIONING THE BOX(WHERE I DISPLAY SOME MESSAGES) IN THE MAIN INDEX.

// $('#contact-me-box').offset({top: Math.floor($(window).height() * 0.25)});


// EVENT HANDLER TRIGGERS EVERY TIME THE WINDOWS IS RESIZE.
// $( window ).resize(function() {

//     if($("a[href='index.html']").hasClass('currentTab')){
//       $('#box').offset({top: Math.floor($(window).height() * 0.7)});

//     }

//     if($("a[href='contactMe.html']").hasClass('currentTab')){
//       $('#contact-me-box').offset({top: Math.floor($(window).height() * 0.25)});

//     }

// });
