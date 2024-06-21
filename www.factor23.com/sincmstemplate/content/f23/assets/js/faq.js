$(function() {
    $('.faq-text').hide()
    $('.faq-title').on('click', function(e) {
        if (!$(this).hasClass('slided')) {
            $('.faq-title').removeClass('slided')
            $(this).addClass('slided')
            $('.rotated').removeClass('rotated')
            $(this)[0].children[0].classList.add('rotated')
            $('.faq-text').slideUp(200)
            $('#' + $(this).attr('data-faq')).slideDown(200)
        }
    })
})