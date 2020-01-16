

// CUSTOMIZE THE MENU WHEN IT IS EXPANDED THROUGH THE TOOGLER BUTTON.
$('button.navbar-toggler').on('click', function(){
  if ($('button.navbar-toggler').attr('aria-expanded') == 'false') {
      $('nav').addClass('narrow');
      $('#nav-container').addClass('narrow');
      $('a').addClass('mx-auto');
      }

  else {

    $('nav').removeClass('narrow');
    $('#nav-container').removeClass('narrow');
    $('a').removeClass('mx-auto');
  }

});


// TRYING TO FIX THE SIZE OF THE MAIN DIV
// set the main div height to the window inner height.
$('main').height(Math.floor(window.innerHeight * 0.87));
