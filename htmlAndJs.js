const headline = document.getElementById('headline')
setTimeout(() => {
    headline.innerHTML = 'Hello World'
}, 500)

const paragraphes = document.getElementById('paragraphes')
const paragraph = document.createElement('p')
paragraph.innerHTML = 'New paragraph'
paragraphes.appendChild(paragraph)

setTimeout(() => {
    paragraphes.removeChild(paragraph)
}, 1500)

const stambutton = document.getElementById('stambutton')
stambutton.addEventListener('click', () => {
    alert('I was clicked')
})

const inputHeadline = document.getElementById('input-headline')
const buttonHeadline = document.getElementById('button-headline')
buttonHeadline.addEventListener('click', () => {
    headline.innerHTML = inputHeadline.value
})

// תרגיל, צרו אינפוט וכפתור שכאשר לוחצים על הכפתור נוספת פסקה חדשה 
// אל הדיו של הפסקאות עם הערך של האינפוט
// ולאחר מכן האינפוט נהייה ריק

const pInput = document.getElementById('p-input')
const pButton = document.getElementById('p-button')
pButton.addEventListener('click', () => {
    const p = document.createElement('p')
    p.innerHTML = pInput.value
    paragraphes.appendChild(p)
    pInput.value = ""
})

const redbox = document.getElementById('redbox')
// redbox.style.height = '100px'
// redbox.style.width = '100px'
// redbox.style.background = 'red'
// redbox.style.margin = "20px"
// redbox.className = 'box red'

// redbox.className = "box yellow"
redbox.classList.add('box')
redbox.classList.add('red')
redbox.classList.remove('red')
redbox.classList.add('yellow')

// צרו לוח שחמט-דמקה באופן פרוגרמבילי -
const board = document.getElementById('board')

for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
        const square = document.createElement('div')

        if (y % 2 === 0) {
            square.className = x % 2 === 0 ? 'white' : 'black'
        } else {
            square.className = x % 2 === 0 ? 'black' : 'white'
        }

        board.appendChild(square)
    }
}

// selectors

const squares = document.getElementsByClassName('square')
for (let square of squares) {
    square.style.border = '5px solid yellow'
}

const paragraphes2 = document.getElementsByTagName('p')
for (let p of paragraphes2) {
    p.style.color = 'green'
}

const hollowSquares = document.querySelectorAll('.hollow')
for (let square of hollowSquares) {
    square.style.width = '70px'
    square.style.height = '70px'
    square.style.border = '5px solid black'
    square.style.margin = '5px'
}

const firstHollowSquare = document.querySelector('.hollow')
firstHollowSquare.style.background = 'yellow'

// צרו שני דיוים עם מחלקה של ריבוע ירוק
// כאשר לוחצים על אחד מהם הרקע נהפך לצהוב

const greenBoxes = document.getElementsByClassName('box green')
for (let box of greenBoxes) {
    box.addEventListener('click', () => {
        box.classList.remove('green')
        box.classList.add('yellow')
    })
}

const divChildrenEx = document.getElementById('divChildrenEx')
divChildrenEx.children[0].className = 'red'

// צרו דיו עם שלושה עיגולים בצבע כחול שמוצגים בשורה
// כאשר לוחצים על אחד העיגולים הוא נעלם
// יש להתשמש בשדה
// children

// const circlesContainer = document.getElementById('circles-container')
// for (let child of circlesContainer.children) {
//     child.addEventListener('click', () => {
//         circlesContainer.removeChild(child)
//     })
// }

// אותו תרגיל - אסור להשתמש ב
// children
// אסור להוציא את האלמנט של הקונטיינר ל
// js
// רק לחיצה על אחד משלושת העיגולים גורמת להם להימחק

const circles = document.querySelectorAll('#circles-container div')
for (let circle of circles) {
    circle.addEventListener('click', () => {
        circle.className = "none"
    })
}

// input event
const h4InputEvent = document.querySelector('#input-event h4')
const inputInputEvent = document.querySelector('#input-event input')
inputInputEvent.addEventListener('input', (event) => {
    // console.log(event)
    h4InputEvent.innerHTML = event.target.value
})

// Keyup
const h4KwyupEvent = document.querySelector('#keyup-event h4')
const inputKeyupEvent = document.querySelector('#keyup-event input')
inputKeyupEvent.addEventListener('keyup', (event) => {
    // console.log(event)
    // כאשר מקישים אנטר הכותרת מתעדכנת לערך של האינפוט
    if (event.code === 'Enter') {
        h4KwyupEvent.innerHTML = event.target.value
        event.target.value = ""
    }
})

// תרגיל צרו אינפוט שהרקע משתנה לפי אורך הטקסט
// לפי השארית של חלוקה לשלוש
// שארית 0 רקע אדום
// שארית 1 רקע כחול
// שארית 2 אין רקע

document.getElementById('changing-color-input')
    .addEventListener('input', (event) => {
        switch (event.target.value.length % 3) {
            case 0:
                event.target.className = 'red'
                break;
            case 1:
                event.target.className = 'blue'
                break;
            case 2:
                event.target.className = ''
                break;
        }
    });
// blur focus
const inputBlurFocus = document.getElementById('input-blur-focus')
inputBlurFocus.addEventListener('focus', () => {
    // inputBlurFocus.className = "input-focus"
    inputBlurFocus.classList.add('input-focus')
})
inputBlurFocus.addEventListener('blur', () => {
    inputBlurFocus.classList.remove('input-focus')
})

// mouse events
const divMouseEvents = document.getElementById('mouse-events')
// divMouseEvents.addEventListener('mouseenter', () => {
//     divMouseEvents.classList.remove('blue')
//     divMouseEvents.classList.add('red')
// })

// divMouseEvents.addEventListener('mouseleave', () => {
//     divMouseEvents.classList.remove('red')
//     divMouseEvents.classList.add('blue')
// })

// mousemove

// השתמשו באיוונט של
// mousemove
// ולפי המיקום של העכבר בתוך הדיו של
// mouse - events
// תקבעו את הרקע של הדיו
// לפי המיקום של העכבר בחלוקה לארבעה רבעים
// ובהתאם לכך בארבעה צבעים

divMouseEvents.addEventListener('mousemove', (event) => {
    const x = event.offsetX
    const y = event.offsetY

    if (x < 151) {
        divMouseEvents.className = y < 151 ? 'mouse-events red' : 'mouse-events blue'
    } else {
        divMouseEvents.className = y < 151 ? 'mouse-events yellow' : 'mouse-events green'
    }
})

// bubbling

const divBubblingEx = document.getElementById('bubbling-ex')
const buttonBubblingEx = document.querySelector('#bubbling-ex button')
buttonBubblingEx.addEventListener('click', (event) => {
    event.stopPropagation()
    divBubblingEx.className = 'bubbling-ex yellow'
})

divBubblingEx.addEventListener('click', () => {
    setTimeout(() => {
        divBubblingEx.className = 'bubbling-ex blue'
    }, 1500)
})

// צרו כפתור שמקפיץ מודל למרכז המסך
// בתוך המודל יש כפתור לסגור את המודל
// כאשר לוחצים על הכפתור או על הרקע המודל נסגר
// אבל כאשר לוחצים על גוף המודל הוא לא נסגר
// המודל צריך להיות במרכז המסך באופן קבוע גם כאשר מזיזים את העמוד למעלה ולמטה

const modal = document.getElementById('modal')
const modalBox = document.getElementById('modal-box')
const buttonCloseModal = document.getElementById('button-close-modal')
const buttonOpenModal = document.getElementById('button-open-modal')

buttonOpenModal.addEventListener('click', () => {
    modal.className = 'modal'
})

modal.addEventListener('click', () => {
    modal.className = 'none'
})

buttonCloseModal.addEventListener('click', () => {
    modal.className = 'none'
})

modalBox.addEventListener('click', (event) => {
    event.stopPropagation()
})