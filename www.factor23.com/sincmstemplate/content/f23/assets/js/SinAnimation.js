/* 
    COME USARE:
    chiamare uno o più metodi. il primo parametro è sempre l'id dell'elemento da animare
    time è il vale in millisecondi di ogni intervallo
    value è la distanza in px di quanto deve essere spostato l'elemento 
*/


/* 
    precision = di quanti px al ciclo deve essere spostato l'elemento
*/
let preSlideLeft = []
let SinSlideLeft = (id, time, value, precision) => {
    let marginDiff = precision || 3
    let item = document.getElementById(id)
    let margin = value || '-100'

    if (!item.style.margin) {
        item.style.margin = 0
    }
    preSlideLeft.push({ id, pre: item.style.marginLeft })

    let setMarginLeft = setInterval(() => {
        let currentMargin = item.style.marginLeft.substring(0, item.style.marginLeft.indexOf('px'))
        item.style.marginLeft = ( currentMargin - marginDiff ) + 'px'
        if (parseInt(Math.abs(currentMargin)) > parseInt(margin)) {
            clearInterval(setMarginLeft)   
        }
    }, time)
}

let preSlideRight = []
let SinSlideRight = (id, time, value, precision) => {
    let marginDiff = precision || 3
    let item = document.getElementById(id)
    let margin = value || '100'

    if (!item.style.margin) {
        item.style.margin = 0
    }
    preSlideRight.push({id, pre: item.style.marginLeft})

    let setMarginLeft = setInterval(() => {
        let currentMargin = item.style.marginLeft.substring(0, item.style.marginLeft.indexOf('px'));
        let newMargin = parseInt(currentMargin) + parseInt(marginDiff)
        
        item.style.marginLeft = newMargin + 'px';
        if (parseInt(Math.abs(currentMargin)) > parseInt(margin)) {
            clearInterval(setMarginLeft)
        }
    }, time)
}

let preFadeOut = []
let SinFadeOut = (id, time, value) => {
    let item = document.getElementById(id);
    let opacity = value || '0'

    preFadeOut.push({ id, pre: item.style.marginLeft })

    item.style.opacity = 1
    let setopacity = setInterval(() => {
        item.style.opacity -= .01;
        if (item.style.opacity == opacity) {
            clearInterval(setopacity)
        }
    }, time);
}

/* 
    riporta l'elemento con id com'era prima di animazioni. se forced = true allora porta tutto a 0
*/
let sinanimateReset = (id, forced) => {
    let item = document.getElementById(id)
    if (forced) {
        item.style.opacity = 1
        item.style.marginLeft = 0
    } else {
        for (const f of preFadeOut) {
            if (f.id == id) {
                item.style.opacity = f.pre
                break
            }
        }
        for (const f of preSlideRight) {
            if (f.id == id) {
                item.style.marginLeft = f.pre
                break
            }
        }
        for (const f of preSlideLeft) {
            if (f.id == id) {
                item.style.marginLeft = f.pre
                break
            }
        }
    }

}

