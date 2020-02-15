

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

// CUSTOMIZE THE MENU WHEN IT IS EXPANDED THROUGH THE TOOGLER BUTTON.


// TRYING TO FIX THE SIZE OF THE MAIN DIV

// set the main div height to the window inner height.
// $('main').height(Math.floor(window.innerHeight * 0.87));

// set the main div height to the window inner height in the contact me tab.
// $('div#contact-me').height(Math.floor($(window).height() * 0.95));

// TRYING TO FIX THE SIZE OF THE MAIN DIV



// POSITIONING THE BOX(WHERE I DISPLAY SOME MESSAGES) IN THE MAIN INDEX.

$('#box').offset({top: Math.floor($(window).height() * 0.7)});

// POSITIONING THE BOX(WHERE I DISPLAY SOME MESSAGES) IN THE MAIN INDEX.

$('#contact-me-box').offset({top: Math.floor($(window).height() * 0.25)});


// EVENT HANDLER TRIGGERS EVERY TIME THE WINDOWS IS RESIZE.
$( window ).resize(function() {

    if($("a[href='index.html']").hasClass('currentTab')){
      $('#box').offset({top: Math.floor($(window).height() * 0.7)});

    }

    if($("a[href='contactMe.html']").hasClass('currentTab')){
      $('#contact-me-box').offset({top: Math.floor($(window).height() * 0.25)});

    }

});
