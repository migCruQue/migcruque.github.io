

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

