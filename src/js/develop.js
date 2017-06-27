function showMoreSkill() {
    $('.skill__item--butt').click(function () {
        $(this).remove();
        $('.skill__item.hidden').removeClass('hidden');
    });
}
$(document).ready(function () {
    showMoreSkill();
})