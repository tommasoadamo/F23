$(function() {

    let hex_page_index = 1
    $('.hex-arrow-left').click(() => {
        if (hex_page_index > 1) {
            $('#hexagon-' + hex_page_index).removeClass('hexagon-active')
            $('#hex-title-' + hex_page_index).removeClass('white-text')
            $('#hex-page-' + hex_page_index).addClass('hide')
            hex_page_index--
            $('#hexagon-' + hex_page_index).addClass('hexagon-active')
            $('#hex-title-' + hex_page_index).addClass('white-text')
            $('#hex-page-' + hex_page_index).removeClass('hide')
        }
    })
    $('.hex-arrow-right').click(() => {
        if (hex_page_index < 4) {
            $('#hexagon-' + hex_page_index).removeClass('hexagon-active')
            $('#hex-title-' + hex_page_index).removeClass('white-text')
            $('#hex-page-' + hex_page_index).addClass('hide')
            hex_page_index++
            $('#hexagon-' + hex_page_index).addClass('hexagon-active')
            $('#hex-title-' + hex_page_index).addClass('white-text')
            $('#hex-page-' + hex_page_index).removeClass('hide')
        }
    })

    // accordion slider
    $('.accordion-li').on('click', function(e) {
        $('.accordion-li').removeClass('accordion-active')
        $(this).addClass('accordion-active')
    })

    // imposto la prima slide come attiva
    let sliders = document.querySelectorAll('.accordion-li')
    sliders[0].classList.add('accordion-active')
})

isnothome = false

// animazioni
let transformScale = 0.8;

let hPerc = (n) => {
    return (window.innerHeight / 100) * n
}

let windowWidth = window.innerWidth

let accordion       = document.getElementById('accordion-slider-home')
let accordionOffset = accordion.offsetHeight
let accordionHeight = accordion.clientHeight
let accordionMin    = accordionOffset + hPerc(60)
let accordionMax    = accordionOffset + accordionHeight + hPerc(20)

let onethird = document.getElementById('onethird-p-c')
let onethirdOffset = Math.abs(onethird.getBoundingClientRect().top)
let onethirdHeight = onethird.clientHeight
let onethirdMin    = onethirdOffset + hPerc(10)
let onethirdMax    = onethirdOffset + onethirdHeight + hPerc(30)

let shareSectionRotImg       = document.getElementById('shareSectionRotatingImg')
let shareSectionRotImgOffset = Math.abs(shareSectionRotImg.getBoundingClientRect().top)
let shareSectionRotImgHeight = shareSectionRotImg.clientHeight
let shareSectionRotImgMin    = shareSectionRotImgOffset + hPerc(45)
let shareSectionRotImgMax    = shareSectionRotImgOffset + shareSectionRotImgHeight + hPerc(80)

let shareSectionListItem    = $('.shareSectionListDot')
let shareSectionListText    = $('.shareSectionListText')
let shareSectionRightImage  = $('.shareSectionRightImage')
let shareSectionTitle       = document.getElementById('shareSectionTitle')
let shareSectionTitleOffset = Math.abs(shareSectionTitle.getBoundingClientRect().top)
let shareSectionTitleHeight = shareSectionTitle.clientHeight
let shareSectionTitleMin    = shareSectionTitleOffset + hPerc(50)
let shareSectionTitleMax    = shareSectionTitleOffset + shareSectionTitleHeight + hPerc(80)

let hexatitle       = document.getElementById('hexatitle')
let hexasubtitle    = $('.hexasubtitle')
let hexatext1       = $('.hexatext1')
let hexatext2       = $('.hexatext2')
let hexabutton      = $('.hexabutton')
let hexagonImages   = $('.hexagon-images')
let hexImagesBtn    = $('.hexImagesBtn')
let hexatitleOffset = Math.abs(hexatitle.getBoundingClientRect().top)
let hexatitleHeight = hexatitle.clientHeight
let hexatitleMin    = hexatitleOffset + hPerc(50)
let hexatitleMax    = hexatitleOffset + hexatitleHeight + hPerc(80)

let championTitle       = document.getElementById('championTitle')
let championVideo       = $('.championVideo')
let championImage       = $('.championImage')
let championTitleOffset = Math.abs(championTitle.getBoundingClientRect().top)
let championTitleHeight = championTitle.clientHeight
let championTitleMin    = championTitleOffset + hPerc(50)
let championTitleMax    = championTitleOffset + championTitleHeight + hPerc(50)

let competitionTitle       = document.getElementById('competitionTitle')
let competitionTitleOffset = Math.abs(competitionTitle.getBoundingClientRect().top)
let competitionTitleHeight = competitionTitle.clientHeight
let competitionTitleMin    = competitionTitleOffset - hPerc(140)
let competitionTitleMax    = competitionTitleOffset + competitionTitleHeight - hPerc(132)


let OldRange
let NewRange
let NewValue
let finalVal 
let finalValOpacity

/*
formula magica per convertire range (es da 100 a 200 in da 0.3 a 0.8):

OldRange = (OldMax - OldMin)
NewRange = (NewMax - NewMin)
NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin
*/

let loaderPart1 = () => {
    let opacity = 0
    let translate = 20
    let textPercentageInterval = setInterval(() => {
        opacity += 0.05
        translate--

        if (opacity >= 1 && translate <= 0) {
            clearInterval(textPercentageInterval)
            setTimeout(() => { loaderPart2() }, 1000);
        } else {
            $(percentageText).css('opacity', opacity)
            $(percentageText).css('transform', `translate(0px, ${translate}px)`)
        }
    }, 10);
}

let loaderPart2 = () => {
    let translate = 0
    let opacity = 1
    let textPercentageInterval = setInterval(() => {
        translate++
        opacity = (Math.round(opacity * 100) / 100) - 0.025

        if (translate >= 40) {
            clearInterval(textPercentageInterval)
            loaderPart3()
        } else {
            $(percentageText).css('transform', `translate(0px, ${translate * 2}px)`)
            $(logoAnimate).css('transform', `translate(0px, -${translate}px)`)
            $(logoAnimate).css('opacity', opacity)
        }
    }, 10);
}

let loaderPart3 = () => {
    let opacity = 1

    let loaderInterval = setInterval(() => {
        opacity = (Math.round(opacity * 100) / 100) - 0.05
        if (opacity <= 0) {
            clearInterval(loaderInterval)
            loaderPart4()
        } else {
            loader.style.opacity = opacity;
        }

    }, 10);
}

let loaderPart4 = () => {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';

    let opacity = 0
    let opacityF = 0
    let translate = 100
    let translateF = 100

    let loaderInterval = setInterval(() => {
        if (opacity >= 1 && translate <= 0) {
            clearInterval(loaderInterval)
        } else {
            opacity = Math.round((opacity + 0.01) * 100) / 100
            translate--
            if (translate < 0) {
                translate = 0
            }

            if (windowWidth > 992) {
                headerWrap.style.transform = `translate(0px, -${translate}px)`;
                headerWrap.style.opacity = opacity;
            }

            particle_container_id.style.opacity = opacity

            scopriikit.style.top = translate
            scopriikit.style.opacity = opacity
        }
    }, 1);

    let fasterInterval = setInterval(() => {
        if (opacityF >= 1 && translateF <= 0) {
            clearInterval(fasterInterval)
        } else {
            opacityF = Math.round((opacityF + 0.04) * 100) / 100
            translateF -= 4
            if (translateF < 0) {
                translateF = 0
            }

            hometitle1.style.transform = `translate(-${translateF}px, 0px)`
            hometitle1.style.opacity = opacityF;

            homesubtitle1.style.transform = `translate(-${translateF * 2}px, 0px)`
            homesubtitle1.style.opacity = opacityF;

            scopridipiu.style.top = translateF
            scopridipiu.style.opacity = opacityF
        }
    }, 1);
}

let loader
let percentageText        = $('#percentageText')
let logoAnimate           = $('.logo-animate')
let headerWrap            = document.getElementById('header-wrap')
let particle_container_id = document.getElementById('particle_container_id')
let hometitle1            = document.getElementById('hometitle1')
let homesubtitle1         = document.getElementById('homesubtitle1')
let scopridipiu           = document.getElementById('scopridipiu')
let scopriikit            = document.getElementById('scopriikit')

// se mobile
if (windowWidth < 992) {
    $(headerWrap).removeClass('animate')
    $(headerWrap).removeClass('sinanimate')
    $(headerWrap).addClass('mobile-no-anim')
    $(headerWrap).css('transform', 'translate(0px, 0px)')
    $(headerWrap).css('opacity', '1')
}

document.addEventListener("DOMContentLoaded", () => {
    loader = document.getElementById('loader');
    loaderPart1()
});

// animazioni onscroll
if (windowWidth > 992) {
    window.addEventListener('scroll', () => {

        let scrolled = window.scrollY

        if (scrolled >= accordionMin && scrolled < accordionMax) {
            // scale
            OldRange = ((accordionMin + accordionHeight - 400) - accordionMin)
            NewRange = (1 - 0.8)
            NewValue = (((scrolled - accordionMin) * NewRange) / OldRange) + 0.8
            finalVal = Math.round(NewValue * 100) / 100

            // opacity
            OldRange = ((accordionMin + accordionHeight - 400) - accordionMin)
            NewRange = (1 - 0.4)
            NewValue = (((scrolled - accordionMin) * NewRange) / OldRange) + 0.4
            finalValOpacity = Math.round(NewValue * 100) / 100

            if (finalVal > 1)
                finalVal = 1
            else if (finalVal < 0.8)
                finalVal = 0.8
            if (finalValOpacity < 0.4)
                finalValOpacity = 0.4
            if (finalValOpacity > 1)
                finalValOpacity = 1

            let transformValue = 'scale(' + finalVal + ')'

            accordion.style.WebkitTransform = transformValue
            accordion.style.MozTransform    = transformValue
            accordion.style.OTransform      = transformValue
            accordion.style.transform       = transformValue
            accordion.style.opacity         = finalValOpacity
        }

        // onethird-page-content
        if (scrolled >= onethirdMin && scrolled < onethirdMax) {
            // transform
            OldRange = ((onethirdMin + onethirdHeight - hPerc(40)) - onethirdMin)
            NewRange = (0 - 60)
            NewValue = (((scrolled - onethirdMin) * NewRange) / OldRange) + (0)
            let onethirdFinalVal = Math.round(NewValue * 100) / 100


            // opacity
            OldRange = ((onethirdMin + onethirdHeight - hPerc(40)) - onethirdMin)
            NewRange = (1 - 0)
            NewValue = (((scrolled - onethirdMin) * NewRange) / OldRange) + 0
            let onethirdFinalValOpacity = Math.round(NewValue * 100) / 100

            let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            if (isFirefox)
                onethirdFinalVal = (onethirdFinalVal / 2) - 30

            if (onethirdFinalVal > 60)
                onethirdFinalVal = 60
            if (onethirdFinalVal < 0)
                onethirdFinalVal = 0

            $(onethird).css('transform', `translate(0px, ${onethirdFinalVal}px)`)
            $(onethird).css('opacity', Math.abs(onethirdFinalValOpacity))
        }

        // shareSectionRotImg
        if (scrolled >= shareSectionRotImgMin && scrolled < shareSectionRotImgMax) {
            // transform
            OldRange = ((shareSectionRotImgMin + shareSectionRotImgHeight - hPerc(40)) - shareSectionRotImgMin)
            NewRange = (0 - 60)
            NewValue = (((scrolled - shareSectionRotImgMin) * NewRange) / OldRange) + (60)
            let shareSectionRotImgFinalVal = Math.round(NewValue * 100) / 100

            // opacity
            OldRange = ((shareSectionRotImgMin + shareSectionRotImgHeight - hPerc(40)) - shareSectionRotImgMin)
            NewRange = (1 - 0)
            NewValue = (((scrolled - shareSectionRotImgMin) * NewRange) / OldRange) + 0
            let shareSectionRotImgFinalValOpacity = Math.round(NewValue * 100) / 100

            if (shareSectionRotImgFinalVal > 60)
                shareSectionRotImgFinalVal = 60
            else if (shareSectionRotImgFinalVal < 0)
                shareSectionRotImgFinalVal = 0
            if (shareSectionRotImgFinalValOpacity < 0)
                shareSectionRotImgFinalValOpacity = 0
            if (shareSectionRotImgFinalValOpacity > 1)
                shareSectionRotImgFinalValOpacity = 1


            shareSectionRotImg.style.left = `${shareSectionRotImgFinalVal}px`
            shareSectionRotImg.style.opacity = shareSectionRotImgFinalValOpacity
        }

        // shareSectionTItle
        if (scrolled >= shareSectionTitleMin && scrolled < shareSectionTitleMax) {
            // transform
            OldRange = ((shareSectionTitleMin + shareSectionTitleHeight) - shareSectionTitleMin)
            NewRange = (0 - (-60))
            NewValue = (((scrolled - shareSectionTitleMin) * NewRange) / OldRange) + (-60)
            let shareSectionTitleFinalVal = Math.round(NewValue * 100) / 100

            // opacity
            OldRange = ((shareSectionTitleMin + shareSectionTitleHeight) - shareSectionTitleMin)
            NewRange = (1 - 0)
            NewValue = (((scrolled - shareSectionTitleMin) * NewRange) / OldRange) + 0
            let shareSectionTitleFinalValOpacity = Math.round(NewValue * 100) / 100

            if (shareSectionTitleFinalVal < (-60))
                shareSectionTitleFinalVal = (-60)
            else if (shareSectionTitleFinalVal > 0)
                shareSectionTitleFinalVal = 0
            if (shareSectionTitleFinalValOpacity < 0)
                shareSectionTitleFinalValOpacity = 0
            if (shareSectionTitleFinalValOpacity > 1)
                shareSectionTitleFinalValOpacity = 1

            // list title
            $(shareSectionTitle).css('transform', `translate(${shareSectionTitleFinalVal}px, 0px)`)
            $(shareSectionTitle).css('opacity', shareSectionTitleFinalValOpacity)
            // list dots
            $(shareSectionListItem).css('transform', `translate(${shareSectionTitleFinalVal}px, 0px)`)
            $(shareSectionListItem).css('opacity', shareSectionTitleFinalValOpacity)
            // list text
            $(shareSectionListText).css('transform', `translate(${Math.abs(shareSectionTitleFinalVal)}px, 0px)`)
            $(shareSectionListText).css('opacity', shareSectionTitleFinalValOpacity)
            // shareSectionRightImage
            $(shareSectionRightImage).css('transform', `translate(${Math.abs(shareSectionTitleFinalVal)}px, 0px)`)
            $(shareSectionRightImage).css('opacity', shareSectionTitleFinalValOpacity)
        }
        // hexagon
        if (scrolled >= hexatitleMin && scrolled < hexatitleMax) {
            // transform
            OldRange = ((hexatitleMin + hexatitleHeight) - hexatitleMin)
            NewRange = (0 - (-50))
            NewValue = (((scrolled - hexatitleMin) * NewRange) / OldRange) + (-50)
            let hexatitleFinalVal = Math.round(NewValue * 100) / 100

            // opacity
            OldRange = ((hexatitleMin + hexatitleHeight) - hexatitleMin)
            NewRange = (1 - 0)
            NewValue = (((scrolled - hexatitleMin) * NewRange) / OldRange) + 0
            let hexatitleFinalValOpacity = Math.round(NewValue * 100) / 100

            if (hexatitleFinalVal < (-50))
                hexatitleFinalVal = (-50)
            else if (hexatitleFinalVal > 0)
                hexatitleFinalVal = 0
            if (hexatitleFinalValOpacity < 0)
                hexatitleFinalValOpacity = 0
            if (hexatitleFinalValOpacity > 1)
                hexatitleFinalValOpacity = 1

            // title
            $(hexatitle).css('transform', `translate(${Math.abs(hexatitleFinalVal)}px, 0px)`)
            $(hexatitle).css('opacity', hexatitleFinalValOpacity)
            // subtitle
            $(hexasubtitle).css('transform', `translate(${Math.abs(hexatitleFinalVal)}px, 0px)`)
            $(hexasubtitle).css('opacity', hexatitleFinalValOpacity)
            // text 1
            $(hexatext1).css('transform', `translate(${hexatitleFinalVal}px, 0px)`)
            $(hexatext1).css('opacity', hexatitleFinalValOpacity)
            // text 2
            $(hexatext2).css('transform', `translate(${hexatitleFinalVal}px, 0px)`)
            $(hexatext2).css('opacity', hexatitleFinalValOpacity)
            // button 
            $(hexabutton).css('transform', `translate(${Math.abs(hexatitleFinalVal)}px, 0px)`)
            $(hexabutton).css('opacity', hexatitleFinalValOpacity)
            //images
            $(hexagonImages).css('margin-left', `${hexatitleFinalVal}px`)
            $(hexagonImages).css('opacity', hexatitleFinalValOpacity)
            // images button
            $(hexImagesBtn).css('margin-bottom', `${Math.abs(hexatitleFinalVal)}px`)
            $(hexImagesBtn).css('opacity', hexatitleFinalValOpacity)
        }

        if (scrolled >= championTitleMin && scrolled < championTitleMax) {
            // transform
            OldRange = ((championTitleMin + championTitleHeight) - championTitleMin)
            NewRange = (0 - (-40))
            NewValue = (((scrolled - championTitleMin) * NewRange) / OldRange) + (-40)
            let championTitleFinalVal = Math.round(NewValue * 100) / 100

            // opacity
            OldRange = ((championTitleMin + championTitleHeight) - championTitleMin)
            NewRange = (1 - 0)
            NewValue = (((scrolled - championTitleMin) * NewRange) / OldRange) + 0
            let championTitleFinalValOpacity = Math.round(NewValue * 100) / 100

            if (championTitleFinalVal < (-40))
                championTitleFinalVal = (-40)
            else if (championTitleFinalVal > 0)
                championTitleFinalVal = 0
            if (championTitleFinalValOpacity < 0)
                championTitleFinalValOpacity = 0
            if (championTitleFinalValOpacity > 1)
                championTitleFinalValOpacity = 1

            // title
            $(championTitle).css('transform', `translate(0px, ${championTitleFinalVal}px)`)
            $(championTitle).css('opacity', championTitleFinalValOpacity)
            // video
            $(championVideo).css('transform', `translate(0px, ${Math.abs(championTitleFinalVal)}px)`)
            // image
            $(championImage).css('transform', `translate(${championTitleFinalVal * 10}px, 0px)`)
        }

        if (scrolled >= competitionTitleMin && scrolled < competitionTitleMax) {
            // transform
            OldRange = ((competitionTitleMin + competitionTitleHeight) - competitionTitleMin)
            NewRange = (0 - (-40))
            NewValue = (((scrolled - competitionTitleMin) * NewRange) / OldRange) + (-40)
            let competitionTitleFinalVal = Math.round(NewValue * 100) / 100

            // opacity
            OldRange = ((competitionTitleMin + competitionTitleHeight) - competitionTitleMin)
            NewRange = (1 - 0)
            NewValue = (((scrolled - competitionTitleMin) * NewRange) / OldRange) + 0
            let competitionTitleFinalValOpacity = Math.round(NewValue * 100) / 100

            if (competitionTitleFinalVal < (-40))
                competitionTitleFinalVal = (-40)
            else if (competitionTitleFinalVal > 0)
                competitionTitleFinalVal = 0
            if (competitionTitleFinalValOpacity < 0)
                competitionTitleFinalValOpacity = 0
            if (competitionTitleFinalValOpacity > 1)
                competitionTitleFinalValOpacity = 1

            // title
            $(competitionTitle).css('transform', `translate(0px, ${competitionTitleFinalVal}px)`)
            $(competitionTitle).css('opacity', competitionTitleFinalValOpacity)
        }

    })
} else {

    accordion.style.WebkitTransform = 1
    accordion.style.MozTransform    = 1
    accordion.style.OTransform      = 1
    accordion.style.transform       = 1
    accordion.style.opacity         = 1

    onethird.style.transform       = `translate(0px, 0px)`
    onethird.style.WebkitTransform = `translate(0px, 0px)`
    onethird.style.MozTransform    = `translate(0px, 0px)`
    onethird.style.OTransform      = `translate(0px, 0px)`
    onethird.style.opacity         = 1

    shareSectionRotImg.style.left = `0px`
    shareSectionRotImg.style.opacity = 1

    $(shareSectionTitle).css('transform', `translate(0px, 0px)`)
    $(shareSectionTitle).css('opacity', 1)
    $(shareSectionListItem).css('transform', `translate(0px, 0px)`)
    $(shareSectionListItem).css('opacity', 1)
    $(shareSectionListText).css('transform', `translate(0px, 0px)`)
    $(shareSectionListText).css('opacity', 1)
    $(shareSectionRightImage).css('transform', `translate(0px, 0px)`)
    $(shareSectionRightImage).css('opacity', 1)

    $(hexatitle).css('transform', `translate(0px, 0px)`)
    $(hexatitle).css('opacity', 1)
    $(hexasubtitle).css('transform', `translate(0px, 0px)`)
    $(hexasubtitle).css('opacity', 1)
    $(hexatext1).css('transform', `translate(0px, 0px)`)
    $(hexatext1).css('opacity', 1)
    $(hexatext2).css('transform', `translate(0px, 0px)`)
    $(hexatext2).css('opacity', 1)
    $(hexabutton).css('transform', `translate(0px, 0px)`)
    $(hexabutton).css('opacity', 1)
    $(hexagonImages).css('margin-left', `0px`)
    $(hexagonImages).css('opacity', 1)
    $(hexImagesBtn).css('margin-bottom', `0px`)
    $(hexImagesBtn).css('opacity', 1)

    $(championTitle).css('transform', `translate(0px, 0px)`)
    $(championTitle).css('opacity', 1)
    $(championVideo).css('transform', `translate(0px, 0px)`)
    $(championImage).css('transform', `translate(0px, 0px)`)

    $(competitionTitle).css('transform', `translate(0px, 0px)`)
    $(competitionTitle).css('opacity', 1)

}

/* scrollspy */
let lastScrollTop = 0
let scrollingUp = false
