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

const circlesContainer = document.getElementById('circles-container')
for (let child of circlesContainer.children) {
    child.addEventListener('click', () => {
        circlesContainer.removeChild(child)
    })
}