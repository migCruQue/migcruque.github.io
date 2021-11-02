

const $nav = $('nav');
// const $nav_button = $('.nav_button');     //* colection of button with class="nav_button"
// const $div_tab = $('.div_tab');   // *collection of divs with class="div_tab
// const $hamburger = $('.hamburger') // ! collection of buttons with class="hamburger", should I leave a unique hamburger button
// const $exit_menu = $('#exit_menu') 

// let WidthGreaterThan1000 = $(window).width() > 1000;

// function setSuitableNav() {          //on loading set the nav with the class hidden or grid depending on the window viewport width
//     if ($(window).width() >= 1000) {
//         setTabFitting()
//         $nav.removeClass('hidden').addClass('nav_landscape');
//         $hamburger.addClass('hidden');
//     } 
// }

// function resizeNav(){
//         if ( !WidthGreaterThan1000 && $(window).width() > 1000){
//             $nav.addClass('nav_landscape').removeClass('hidden nav_portrait');
//             $hamburger.addClass('hidden');
//             $exit_menu.addClass('hidden');
//         } 
//         if (WidthGreaterThan1000 && $(window).width() < 1000){
//             $nav.addClass('hidden').removeClass('nav_landscape');
//             $hamburger.removeClass('hidden');
//         }
    
//         WidthGreaterThan1000 = $(window).width() > 1000;
// }

// function hamburgerFunctionality(){
//     $(this).addClass('hidden');
//     $exit_menu.removeClass('hidden');
//     $('nav').removeClass('hidden').addClass('nav_portrait');
// }

// function exit_menuFunctionality(){
//     $(this).addClass('hidden');
//     $('nav').removeClass('nav_portrait').addClass('hidden');
//     $('.hamburger').removeClass('hidden');
// }


// function setTabFitting(){
//     let currentTab = $div_tab.not('.hidden');
//     if(($(window).height() * 1.2) < $(document).height()) {               // I multiply the window height by 1.2 as I still want to set
//         currentTab.addClass('alignself');                             // the tab fitting in the screen to the following
//     } else {currentTab.addClass('height100');}
// }

// function nav_buttonsFunctionality(e){
//     if($nav.hasClass('nav_portrait')){
//         $nav.addClass('hidden').removeClass('nav_portrait');// * Check if nav has class nav_portrait and it hides it.
//     }  
//     $div_tab.not('.hidden').addClass('hidden').removeClass('height100 alignself'); // * hide the previous tab
//     $nav_button.filter('.hidden').not('#exit_menu').removeClass('hidden'); // * shows the previous button
//     let buttonID = e.target.id;
//     $(`#${buttonID}`).addClass('hidden'); // * Add class "hidden" to the currently selected button  
//     let tabID = buttonID.replace('_button', '');
//     $(`#${tabID}`).removeClass('hidden'); // * Remove class "hidden" to the currently selected tab 
//     setTabFitting();
// }



// export { setSuitableNav, resizeNav, hamburgerFunctionality, exit_menuFunctionality, nav_buttonsFunctionality}

//! FROM BOOTSTRAP 5 NAV

let isCurrentWidthSmall = ($(window).width()) <= 992 ;  

$(".navbar-toggler").on("click", function() {
   $nav.hasClass("ovelapping") ? $nav.removeClass("ovelapping") : $nav.addClass("ovelapping");
  });


$(window).on('resize', () => {
    if( $(window).width() > 992  && $nav.hasClass("ovelapping")){  // Remove the class="height100" from the nav when resize to a big screen.
        $nav.removeClass("ovelapping");
    }
    
    if( !isCurrentWidthSmall && $(window).width() < 992 ){      // Check if it was a big screen before and if it has resize to a small screen then
                                                                //Remove the class="show" from the div.remove when resize to a small screen.
      $(".navbar-collapse").removeClass("show");
    }

    isCurrentWidthSmall = ($(window).width()) <= 992; 
});