// Preciso modularizar usando o npm.

const btn = document.querySelector('.btnDarkMode')

btn.addEventListener('click', btnDarkMode)

function btnDarkMode() {
    const btnCircle = document.querySelector('.circle');
    btn.classList.toggle('eventBtn')
    btnCircle.classList.toggle('eventBtnCircle')
}


 

