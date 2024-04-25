const shareButton = document.querySelector('#share-icon')
const popUp = document.querySelector('#pop-up')
const arrowImage = document.querySelector('#arrow')

shareButton.addEventListener('click', () => {
    popUp.classList.remove('hidden')
})

document.addEventListener('click', (event) => {
    let targetElement = event.target;
    console.log(targetElement)
    if (targetElement !== shareButton && targetElement !== arrowImage) {
        popUp.classList.add('hidden')
    }
})