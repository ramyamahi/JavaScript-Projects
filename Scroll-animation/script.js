const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxposition)

checkboxposition()

function checkboxposition() {
    const pageBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < pageBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}