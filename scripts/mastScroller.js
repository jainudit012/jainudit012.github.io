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
    removeClassFromMultiple([midPaginator, endPaginator], 'paginator__current-progress')

    removeClass(mast1, 'hideabs')
    addClassToMultiple([mast2, mast3], 'hideabs')
})

midPaginator.addEventListener('click', () => {
    startNumber.innerHTML = "02"
    removeClass(startNumber, 'paginator__greyed')
    addClass(endNumber, 'paginator__greyed')

    removeClassFromMultiple([startPaginator, endPaginator], 'paginator__current-progress')
    addClass(midPaginator, 'paginator__current-progress')

    addClassToMultiple([mast1, mast3], 'hideabs')
    removeClass(mast2, 'hideabs')
})

endPaginator.addEventListener('click', () => {
    startNumber.innerHTML = "03"
    removeClass(endNumber, 'paginator__greyed')
    addClass(startNumber, 'paginator__greyed')

    removeClassFromMultiple([startPaginator, midPaginator], 'paginator__current-progress')
    addClass(endPaginator, 'paginator__current-progress')
    
    addClassToMultiple([mast1, mast2], 'hideabs')
    removeClass(mast3, 'hideabs')
})
