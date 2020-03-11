/**
 * 
 * @param {HTMLElement} element A HTML element on which a certain class is to be applied
 * @param {String} className The class that is to be applied. 
 * Can be multiple with a space in between. 
 * e.g., 'star mt-1'
 */
function addClass(element, className){
    const arrOfClassNames = element.className.split(" ")
    if(arrOfClassNames.indexOf(className) === -1) element.className += ` ${className}`
}

/**
 * 
 * @param {HTMLElement} element A SVG HTML element on which a certain class is to be applied
 * @param {String} className The class that is to be applied. 
 * Can be multiple with a space in between. 
 * e.g., 'star mt-1'
 */
function addClassToSvg(element, className){
    const arrOfClassNames = element.className.baseVal.split(" ")
    if(arrOfClassNames.indexOf(className) === -1) element.className.baseVal += ` ${className}`
}

/**
 * 
 * @param {HTMLElement} element A HTML element on which a certain class is to be removed
 * @param {String} className The class that is to be removed.
 * Can be multiple with a space in between but should follow the order of occurence on the element. 
 * e.g., 'star mt-1'
 */
function removeClass(element, className){
    element.className = element.className.replace(className, "")
}

/**
 * 
 * @param {HTMLElement} element A SVG HTML element on which a certain class is to be removed
 * @param {String} className The class that is to be removed.
 * Can be multiple with a space in between but should follow the order of occurence on the element. 
 * e.g., 'star mt-1'
 */
function removeClassFromSvg(element, className){
    element.className.baseVal = element.className.baseVal.replace(className, "")
}

/**
 * 
 * @param {Array[HtmlElement]} elementsArray An array containing HTML elements on which same class is to be applied
 * @param {String} className The class that is to be applied.
 * Can be multiple with a space in between. 
 * e.g., 'star mt-1'
 */
function addClassToMultiple(elementsArray, className){
    if(elementsArray.length > 0){
        elementsArray.forEach(element => addClass(element, className))
    }
}

/**
 * 
 * @param {Array[HtmlElement]} elementsArray An array containing HTML elements on which same class is to be removed
 * @param {String} className The class that is to be removed.
 * Can be multiple with a space in between but should follow the order of occurence on the element. 
 * e.g., 'star mt-1'.
 * @function removeClass(element, className) Used underneath.
 */
function removeClassFromMultiple(elementsArray, className){
    if(elementsArray.length > 0){
        elementsArray.forEach(element => removeClass(element, className))
    }
}

/**
 * 
 * @param {Array} array  The Source Array
 * @param {String} idPattern Pattern should be in the form of pattern1, pattern2, pattern3 ...
 * @param {Integer} numItems Should be Integer
 *  returns { items: Array, valid: Boolean }
 */
function loadElementsToArray(array, idPattern, numItems){
    if(numItems > 0){
        for(i=0;i<numItems;i++){
            const element = document.getElementById(`${idPattern}${i+1}`)
            array.push(element)
        }
    }
    return { items: array, valid: array.length != 0 }
}

/**
 * 
 * @param {Array[HtmlElement]} itemsArray 
 * @param {String} className
 */
function addSelectItemListener(itemsArray, className, raiseSelectedEvent){
    itemsArray.forEach(item => {
        item.addEventListener('click', ()=>{
            const selectedItemIdNum = parseInt(item.id.split('-')[1])
            itemsArray.forEach(item => {
                if(item.id.indexOf(selectedItemIdNum) === -1) {
                    removeClass(item, className)
                }
            })
            addClass(item, className)
            if(raiseSelectedEvent){
                const itemSelectedEvent = new Event('itemSelected')
                item.dispatchEvent(itemSelectedEvent)
            }
        })
    })
}
