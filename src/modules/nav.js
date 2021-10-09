

const $nav = $('nav');
const $nav_button = $('.nav_button');     //* colection of button with class="nav_button"
const $div_tab = $('.div_tab');   // *collection of divs with class="div_tab
const $hamburger = $('.hamburger') // ! collection of buttons with class="hamburger", should I leave a unique hamburger button
const $exit_menu = $('#exit_menu') 

let WidthGreaterThan1000 = $(window).width() > 1000;

function setSuitableNav() {          //on loading set the nav with the class hidden or grid depending on the window viewport width
    if ($(window).width() >= 1000) {
        $nav.removeClass('hidden').addClass('nav_landscape');
        $hamburger.addClass('hidden');
    } 
}




function resizeNav(){
        if ( !WidthGreaterThan1000 && $(window).width() > 1000){
            $nav.addClass('nav_landscape').removeClass('hidden');
            $hamburger.addClass('hidden');
        } 
        if (WidthGreaterThan1000 && $(window).width() < 1000){
            $nav.addClass('hidden').removeClass('nav_landscape');
            $hamburger.removeClass('hidden');
        }
    
        WidthGreaterThan1000 = $(window).width() > 1000;
}

function hamburgerFunctionality(){
    $(this).addClass('hidden');
    $exit_menu.removeClass('hidden');
    $('nav').removeClass('hidden').addClass('nav_portrait');
}

function exit_menuFunctionality(){
    $(this).addClass('hidden');
    $('nav').removeClass('nav_portrait').addClass('hidden');
    $('.hamburger').removeClass('hidden');
}

function nav_buttonsFunctionality(e){
    if($nav.hasClass('nav_portrait')){
        $nav.addClass('hidden').removeClass('nav_portrait');// * Check if nav has class nav_portrait and it hides it.
    }  
    $div_tab.not('.hidden').addClass('hidden'); // * hide the previous tab
    $nav_button.filter('.hidden').removeClass('hidden'); // * shows the previous button
    let buttonID = e.target.id;
    $(`#${buttonID}`).addClass('hidden'); // * Add class "hidden" to the currently selected button  
    let tabID = buttonID.replace('_button', '');
    $(`#${tabID}`).removeClass('hidden'); // * Remove class "hidden" to the currently selected tab 
}



export { setSuitableNav, resizeNav, hamburgerFunctionality, exit_menuFunctionality, nav_buttonsFunctionality}