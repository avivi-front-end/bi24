function showMoreSkill() {
    $('.skill__item--butt').click(function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')) {
            $('.skill__item.hidden').stop().slideDown(10);
            $(this).text('Меньше возможностей');
        }else{
            $('.skill__item.hidden').stop().slideUp(10);
        $(this).text('Еще возможности Битрикс24');
        }
    });
}
function butter(){
    var but = $('.header__butter');
    var ul = $('.header__nav ul');
    if(but.css('display') == 'none'){
        ul.removeClass('active');
        but.removeClass('active');
    }
}
function butterClick() {
    var but = $('.header__butter');
    var ul = $('.header__nav ul');
    but.click(function () {
        but.toggleClass('active');
        if(but.hasClass('active')){
            ul.addClass('active');
        }else{
            ul.removeClass('active');
        }
    });

}
function goTo(){
    $('.anchor').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top;
        $(scroller).animate({scrollTop:target},600);
    });
}
$(window).resize(function () {
    butter();
});
$(document).ready(function () {
    showMoreSkill();
    goTo();
    $('.partners__wrap').slick({
        slidesToShow: 5,
        infinite: false,
        autopla: false,
        arrows: true,
        nextArrow:'<div class="wrap-btn-next"><div class="btn_slider btn-next"></div></div>',
        prevArrow:'<div class="wrap-btn-prev"><div class="btn_slider btn-prev"></div></div>', 
        responsive: [
            { breakpoint: 1100,settings: {slidesToShow: 4 } },
            { breakpoint: 992,settings: {slidesToShow: 3 } },
            { breakpoint: 710,settings: {slidesToShow: 3 } },
            { breakpoint: 610,settings: {slidesToShow: 2 } },
        ]
    });

    $('.partners__wrap').on('afterChange', function(event, slick, currentSlide, nextSlide){   
    $('.partners-info__content').removeClass('active');
    var getAttr = $(".partners__slide").eq(currentSlide).attr('data-partners');
    $('#'+getAttr).addClass("active");
  });
  $('.partners__slide').on('click', function(event, slick, currentSlide, nextSlide){   
    event.preventDefault();
     $('.partners-info__content').removeClass('active');
    var getAttr = $(this).attr('data-partners');
    $('#'+getAttr).addClass("active");

  });
    butterClick();
    $('.form__select select').styler({selectSmartPositioning:false});
})