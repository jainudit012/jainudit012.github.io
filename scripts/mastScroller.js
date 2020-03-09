function addClass(element, className){
    const arrOfClassNames = element.className.split(" ")
    if(arrOfClassNames.indexOf(className) === -1) element.className += ` ${className}`
}

function removeClass(element, className){
    element.className = element.className.replace(className, "")
}

const startNumber = document.getElementById('start__count')
const endNumber = document.getElementById('end__count')

const startPaginator = document.getElementById('paginator__progress-start')
const midPaginator = document.getElementById('paginator__progress-mid')
const endPaginator = document.getElementById('paginator__progress-end')

const mast1 = document.getElementById('mast-1')
const mast2 = document.getElementById('mast-2')
const mast3 = document.getElementById('mast-3')

startPaginator.addEventListener('click', () => {
    startNumber.innerHTML = "01"
    removeClass(startNumber, 'paginator__greyed')
    addClass(endNumber, 'paginator__greyed')

    addClass(startPaginator, 'paginator__current-progress')
    removeClass(midPaginator, 'paginator__current-progress')
    removeClass(endPaginator, 'paginator__current-progress')

    removeClass(mast1, 'hideabs')
    addClass(mast2, 'hideabs')
    addClass(mast3, 'hideabs')
})

midPaginator.addEventListener('click', () => {
    startNumber.innerHTML = "02"
    removeClass(startNumber, 'paginator__greyed')
    addClass(endNumber, 'paginator__greyed')

    removeClass(startPaginator, 'paginator__current-progress')
    addClass(midPaginator, 'paginator__current-progress')
    removeClass(endPaginator, 'paginator__current-progress')

    addClass(mast1, 'hideabs')
    removeClass(mast2, 'hideabs')
    addClass(mast3, 'hideabs')
})

endPaginator.addEventListener('click', () => {
    startNumber.innerHTML = "03"
    removeClass(endNumber, 'paginator__greyed')
    addClass(startNumber, 'paginator__greyed')

    removeClass(startPaginator, 'paginator__current-progress')
    removeClass(midPaginator, 'paginator__current-progress')
    addClass(endPaginator, 'paginator__current-progress')
    
    addClass(mast1, 'hideabs')
    addClass(mast2, 'hideabs')
    removeClass(mast3, 'hideabs')
})
