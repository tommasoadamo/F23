
$('.mac-image-slide').click(function(e) {
    $('.mac-image').addClass('hide')
    $('#' + $(this).attr('data-image')).removeClass('hide')
    $('.mac-text').removeClass('font-weight-bold')
    $('#' + $(this).attr('data-text')).addClass('font-weight-bold')
    
    $('.mac-image-slide').removeClass('border')
    $(this)[0].classList.add('border')
})


$('.kits-modal-close').click(function(e) {
    $('.kits-modal').addClass('hide')
    $('.kits-modal').removeClass('show')
    $('body, html').removeClass('no-scroll')
    $('.navbar').css('margin-right', `-=${getScrollbarWidth()}`)

})
$('.open-modal-kit').click(function (e) {
    let id = $(this).attr('data-id')
    $('#modal-kit-' + id).removeClass('hide')
    $('#modal-kit-' + id).addClass('show')
    $('body, html').addClass('no-scroll')
    $('.navbar').css('margin-right', `+=${getScrollbarWidth()}`)
})

/* $('.open-modal-kit').click(function (e) {
    $('.kits-modal').addClass('hide')
    $('.kits-modal').removeClass('hide')
    let id = $(this).attr('data-id')
    $('#modal-profile-kit-' + id).removeClass('hide')
    $('#modal-profile-kit-' + id).addClass('show')
    $('body, html').addClass('no-scroll')
    $('.navbar').css('margin-right', `+=${getScrollbarWidth()}`)
}) */

$(function() {
    if ($('.kit-carousel').length > 0) {
        var flkty = new Flickity('.kit-carousel')
    }

    $('.kit-index-item').click(function(e) {
        let index = $(this).attr('data-index')
        flkty.select(index)
    })

})