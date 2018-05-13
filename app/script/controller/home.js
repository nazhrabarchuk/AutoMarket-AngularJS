app.controller('homeCtrl', function () {
    var vm = this;


$(document).ready(function () {
    $(".swiper-pagination-circle").click(function () {
        $(".swiper-pagination-circle").removeClass("circle-active");
        $(this).toggleClass("circle-active");

    })
    $('.first-circle').click(function() {
    if($('.first-slide').css({display:'none'})){
        $('.first-slide').fadeIn(.2);
        $('.second-slide').fadeOut();
    }
    })
    $('.second-circle').click(function() {
    if($('.second-slide').css({display:'none'})){
        $('.first-slide').fadeOut();
        $('.second-slide').fadeIn(.2);
    }
    })
    
    $('.carousel-block__news').each(function(index, element){
        $(element).mouseenter(function(){
            $(this).children('.carousel-block__img').children('.carousel-news__img').css({transform:'scale(1.05)',opacity:0.8});
        $(this).children('.carousel-news__content').children('.carousel-news__title').css({color:"#e56266"})
        })
        $(element).mouseleave(function(){
            $(this).children('.carousel-block__img').children('.carousel-news__img').css({transform:'scale(1)',opacity:1});
        $(this).children('.carousel-news__content').children('.carousel-news__title').css({color:"#2e2e2e"})
        })
    })
    var current = 1;
    var total = $('.carousel-item').length
        $('.current-slide').html(current);
        $('.total-slide').html($('.carousel-item').length)
    $('.carousel-control-next').click(function(){
        current++;
        if(current > $('.carousel-item').length){
            current = 1;    
        }
        $('.current-slide').html(current);
    })
    $('.carousel-control-prev').click(function(){
        current--;
        if(current < 1){
            current = 3;    
        }
        $('.current-slide').html(current);
    })
    $('.carousel').carousel({ interval: false });
    
})
  vm.activeMenu = 'Buy';  
//    $('.get_usa-page').click(function(){
//        $()
//    })
    
})
