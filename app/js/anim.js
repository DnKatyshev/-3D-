// 3D Mooving
document.querySelector('header').addEventListener('mousemove', (e) => {
    let moveX = (e.clientX - window.innerWidth / 2) * .007 + 'deg';
    let moveY = (e.clientY - window.innerHeight / 2) * .02 + 'deg';

document.querySelector('.animation-header').style.cssText = `transform: rotateX(${moveY}) rotateY(${moveX})`

})

document.querySelector('.form').addEventListener('mousemove', (e) => {
    let moveX = (e.clientX - window.innerWidth / 2) * .007 + 'deg';
    let moveY = (e.clientY - window.innerHeight / 2) * .02 + 'deg';

document.querySelector('.animation-form').style.cssText = `transform: rotateX(${moveY}) rotateY(${moveX})`

})


// Castom Cursor
const cursor = document.querySelector('.cursor')

const cursorActiveLinks = document.querySelectorAll('a')
const cursorActiveBtns = document.querySelectorAll('button')
const cursorActiveInputs = document.querySelectorAll('input')
let a = Array.from(cursorActiveLinks)
let b = Array.from(cursorActiveBtns)
let c = Array.from(cursorActiveInputs)
const cursorArray = [...a, ...b, ...c]
cursorArray.forEach(c => {
    c.addEventListener('mouseover', (e) => {
        cursor.classList.add("cursor-active")
    })
    c.addEventListener('mouseout', (e) => {
        cursor.classList.remove("cursor-active")
    })
})


document.addEventListener('mousemove', e => {
   
    cursor.setAttribute("style", "top: "+(e.clientY - 17.5)+"px; left: "+(e.clientX - 17.5)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("cursor-active")
  
        setTimeout(() => {
            cursor.classList.remove("cursor-active")
        }, 200)
})



// Form-Validation
function validation(form){

    function removeError(input){
        let inputParent = input.closest('.form__group')
        
        if (input.classList.contains('error')){
            inputParent.querySelector('.error-label').remove()
            input.classList.remove('error')
        }
    }

    function createError(input, text){
        let inputParent = input.closest('.form__group')
        let errorParagraph = document.createElement('p')

        input.classList.add('error')
        errorParagraph.classList.add('error-label')
        errorParagraph.textContent = text

        inputParent.append(errorParagraph)
    }


    let result = true

    let formInputs = document.querySelectorAll('.form__input')
    formInputs.forEach(input => {

        removeError(input)

        if (input.value == ''){
            createError(input, 'Поле не заполнено!')
            result = false
        }
    })

    return result
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault()

    if (validation(this) == true) {
        alert('Форма проверена успешно!')
    }
})
// Input-TMask
let formPhone = document.querySelector('#input-2')
let im = new Inputmask('+7 (999) 999-99-99', {showMaskOnHover: false})
im.mask(formPhone)