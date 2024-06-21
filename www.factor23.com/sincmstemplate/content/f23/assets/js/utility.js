// Scroll to specific values
// scrollTo is the same
/* window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
  }); */

  // Scroll certain amounts from current position
  /* window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
  }); */

  // Scroll to a certain element
 /*  document.querySelector('.hello').scrollIntoView({
    behavior: 'smooth'
  }); */
let deviceWidth = window.innerWidth
document.addEventListener('DOMContentLoaded', () => {
  // wrapper
  if ((typeof isnothome == "undefined" || isnothome == null) && deviceWidth > 492) {
    setTimeout(() => {
      let wrapper = document.getElementById('header-wrap')
      let translate = 100
      let opacity = 0

      let loaderInterval = setInterval(() => {
        if (opacity >= 1 && translate <= 0) {
          clearInterval(loaderInterval)
        } else {
          if (translate < 0) {
            translate = 0
          }
          opacity = Math.round((opacity + 0.10) * 100) / 100
          translate -= 10

          //$(headerWrap).css('opacity', opacity)
          wrapper.style.transform = `translate(0px, -${translate}px)`;
          wrapper.style.opacity = opacity;
        }
      }, 1);

    }, 1200);
  }
})
console.log('utility loaded')

let mouseOnBlack  = `wait`
let mouseOnWhite  = `no-drop`
let mouseOnButton = `help`

let mouseX
let mouseY
let hoveredElement



let cursor = document.getElementById('custom-cursor')

let isBtn = true
let animationDuration = 75

window.addEventListener('mousemove', (e) => {
  let background = 'dark'
  mouseX = e.clientX
  mouseY = e.clientY

  if (window.navigator.userAgent.indexOf("Edge") < 0) {   
    hoveredElement = document.elementsFromPoint(mouseX, mouseY)
    for (const el of hoveredElement) {
      if ( colorIsLight(window.getComputedStyle(el, null).getPropertyValue("background-color")) ) {
        background = 'light'
      }
      if (el.tagName == 'BUTTON' || el.tagName == 'A') {
        background = 'btn'
      }
    }
  
  
    let snapshot
    switch (background) {
      case 'dark':
        cursor.classList.remove('cursor-on-light')
        cursor.classList.add('cursor-on-dark')
        mouseX -= 22
        mouseY -= 22
        fromBtn()
        break;
      case 'light' :
        cursor.classList.remove('cursor-on-dark')
        cursor.classList.add('cursor-on-light')
        mouseX -= 22
        mouseY -= 22
        fromBtn()
        break;
      default:
  
        toBtn()
        mouseX -= 22
        mouseY -= 22
        isBtn = true
        break;
    }
  }


  $(cursor).css('left', mouseX)
  $(cursor).css('top', mouseY)

})

function fromBtn() {
  if (isBtn) {
    animateFromBtn()
  }
}

function toBtn() {
  if (!isBtn) {
    animateToBtn()
  }
}

function animateToBtn() {
  let scale = 1
  let interval = setInterval(() => {
    if (scale < 2) {
      scale += 0.1
      $(cursor).css('transform', `scale(${scale})`)
    } else {
      clearInterval(interval)
    }
  }, animationDuration / 10);
  isBtn = true
}

function animateFromBtn() {
  let scale = 2
  let interval = setInterval(() => {
    if (scale > 1) {
      scale -= 0.1
      $(cursor).css('transform', `scale(${scale})`)
    } else {
      clearInterval(interval)
    }
  }, animationDuration / 10);
  isBtn = true
  isBtn = false
}



function colorIsLight(color) {
  let r, g, b, hsp

  if (color.match(/^rgb/)) {
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)

      r = color[1]
      g = color[2]
      b = color[3]
  }
  else {
      color = +("0x" + color.slice(1).replace(
      color.length < 5 && /./g, '$&$&'))

      r = color >> 16
      g = color >> 8 & 255
      b = color & 255
  }

  hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  )

  if (hsp>127.5) {
      return true
  }
  else {
      return false
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}