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
        slidesToShow: 8,

        responsive: [
            { breakpoint: 1100,settings: {slidesToShow: 6 } },
            { breakpoint: 992,settings: {slidesToShow: 5 } },
            { breakpoint: 710,settings: {slidesToShow: 4 } },
            { breakpoint: 610,settings: {slidesToShow: 3 } },


        ]
    });
    butterClick();
    $('.form__select select').styler({selectSmartPositioning:false});
})