$(function() {

    var $carousel = $('.main-gallery').flickity({
        cellAlign: 'left',
        contain: true
    })

    var flkty = $carousel.data('flickity');

    if($('.campione-card').length > 0) {
        let w = $('.get-my-width').width()
        $('.campione-card').css('width', w +'px')
    }

    let selected
    if (document.querySelector('.image-gallery')) {
        let imgGal = document.querySelector('.image-gallery').children

        setInterval(() => {
            if (flkty.selectedIndex !== selected) {
                $('.athlets-image-slide-box').removeClass('image-border')
                imgGal[flkty.selectedIndex].children[0].classList.add('image-border')
                selected = flkty.selectedIndex
            }
        }, 500)
    }

    $('.athlets-image-slide').click(function(e) {
        $carousel.flickity( 'selectCell', parseInt($(this).attr('data-index')))
    })

})