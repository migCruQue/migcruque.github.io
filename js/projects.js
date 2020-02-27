




// CHANGE THE PROJECT-CARD APPEARENCE WHEN MOUSE OVER SHOWING A DESCRIPTION OF THE PROJECT.
$('.project-card').mouseenter(function(){
  $(this).attr("style","background-image: none");
  $(this).addClass('description');}

);


// GOES BACK TO THE DEFAULT APPEARENCE WITH THE PIC
$('.project-card').mouseleave(function(){
  $(this).removeAttr("style");
  $(this).removeClass('description');}

);
