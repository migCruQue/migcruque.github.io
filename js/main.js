

// let nav = document.getElementById('nav');
//
// width: 50%;
//
//
// margin: 10px;
// text-align: center;
// display: flex;
// flex-direction: column;
//
// to select the button, nav and container using Jquery and to change the CSS using jquery css method.

//
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
