

const $moreInfo= $('.moreInfo');
const $lessInfo = $('.lessInfo');
const $project_links = $('.project_links');
const $description = $('.description');


// * _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- more info button functionaliy-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- 
$moreInfo.click(function(){
    $(this).addClass('hidden');
    $(this).siblings('.project_links').addClass('flex');
    $(this).siblings('.extraInfo').removeClass('hidden');
});


// * _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- less info button functionaliy-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- 
$lessInfo.click(function(){
    $(this).addClass('hidden');
    $(this).siblings('.project_links').addClass('hidden').removeClass('flex');
    $(this).siblings('.extraInfo').addClass('hidden');
    $(this).siblings('.moreInfo').removeClass('hidden');
});


// * on loading and resize check the viewport orientation and if it is landscape show Extra information in the project card._-_-_-_-_-_-_-_-_-_-_-_-_-_

$(window).on('load resize' , function() {       
    if ( $(window).width() > $(window).height() ) {
        $moreInfo.addClass('hidden');
        $description.removeClass('hidden');
        $project_links.removeClass('hidden').addClass('flex');
    } else {
        $moreInfo.removeClass('hidden');
        $description.addClass('hidden');
        $project_links.addClass('hidden').removeClass('flex');
    }
});