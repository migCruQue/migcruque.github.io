

const $moreInfo= $('.moreInfo');
const $lessInfo = $('.lessInfo');
const $project_links = $('.project_links');


$moreInfo.click(function(){
    $(this).addClass('hidden');
    $(this).siblings('.project_links').addClass('flex');
    $(this).siblings('.extraInfo').removeClass('hidden');
});

$lessInfo.click(function(){
    $(this).addClass('hidden');
    $(this).siblings('.project_links').addClass('hidden').removeClass('flex');
    $(this).siblings('.extraInfo').addClass('hidden');
    $(this).siblings('.moreInfo').removeClass('hidden');
});