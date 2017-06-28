function showMoreSkill() {
    $('.skill__item--butt').click(function () {
        $(this).remove();
        $('.skill__item.hidden').removeClass('hidden');
    });
}

$(document).ready(function () {
    showMoreSkill();
    $('.video__slider').slick({
        centerMode: true,
        infinity: false,
        slidesToShow: 3,
       arrows:false,
        dots:true
    });
})