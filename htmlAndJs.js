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



