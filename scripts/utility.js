/**
 * 
 * @param {HTMLElement} element A HTML element on which a certain class is to be applied
 * @param {String} className The class that is to be applied. 
 * Can be multiple with a space in between. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */
function addClass(element, className){
    const arrOfClassNames = element ? element.className.split(" ") : [className]
    if(arrOfClassNames.indexOf(className) === -1) element.className += ` ${className}`
}

/**
 * 
 * @param {HTMLElement} element A SVG HTML element on which a certain class is to be applied
 * @param {String} className The class that is to be applied. 
 * Can be multiple with a space in between. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */
function addClassToSvg(element, className){
    const arrOfClassNames = element ? element.className.baseVal.split(" ") : [className]
    if(arrOfClassNames.indexOf(className) === -1) element.className.baseVal += ` ${className}`
}

/**
 * 
 * @param {HTMLElement} element A HTML element on which a certain class is to be removed
 * @param {String} className The class that is to be removed.
 * Can be multiple with a space in between but should follow the order of occurence on the element. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */
function removeClass(element, className){
    if(element) element.className = element.className.replace(` ${className}`, "")
}

/**
 * 
 * @param {HTMLElement} element A SVG HTML element on which a certain class is to be removed
 * @param {String} className The class that is to be removed.
 * Can be multiple with a space in between but should follow the order of occurence on the element. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */
function removeClassFromSvg(element, className){
    if(element) element.className.baseVal = element.className.baseVal.replace(` ${className}`, "")
}

/**
 * 
 * @param {Array[HtmlElement]} elementsArray An array containing HTML elements on which same class is to be applied
 * @param {String} className The class that is to be applied.
 * Can be multiple with a space in between. ** Should avoid using multiple classes **
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
 * Can be multiple with a space in between but should follow the order of occurence on the element. ** Should avoid using multiple classes **
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
 * @param {String} idPattern Pattern should be in the form of pattern1, pattern2, pattern3 ...
 * @param {HTMLElement} itemsWrapper Should be the wrapper HTML element of the items
 *  returns { items: Array, valid: Boolean }
 */
function loadElementsToArray(idPattern, itemsWrapper){
    const array = [].slice.call(itemsWrapper.children).filter(el=> el.id.indexOf(idPattern) > -1).sort()
    return { items: array, valid: array.length != 0 }
}

/**
 * 
 * @param {Array[HtmlElement]} itemsArray array of HTML elements on which a click event is to be added
 * @param {String} className the className to be toggled on the selected item
 * @param {Boolean} raiseSelectedEvent state whether an event of item selection should be raised or not
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

function toggleClassOnDataSelect(nodeData, dataSetValue, selectedValue, toggleClassName){
    nodeData.forEach(node => {
        if(node.dataset[dataSetValue] === selectedValue) addClass(node, toggleClassName)
        else removeClass(node, toggleClassName)
    })
}

function splitQuery(inputQuery){
    const queries = {}

    if(inputQuery.indexOf('&') !== -1){
        inputQuery.split('&').forEach(query => {
            queries[query.split('=')[0]] = query.split('=')[1]
        })
    }else {
        queries[inputQuery.split('=')[0]] = inputQuery.split('=')[1]
    }

    return queries
}

function loadFromQuery(){
    let searchQuery = window.location.search.replace('?', '')

    window.scrollTo(0 , 0)

    return splitQuery(searchQuery)
}

function changeHashToQuery(queryName, defaultState){
    const searchHash = window.location.hash

    window.history.replaceState(null, '' , 
        `?${queryName}=${ searchHash.length === 0 ? defaultState : searchHash.replace(`#${queryName}=`, '')}`
    )
}
