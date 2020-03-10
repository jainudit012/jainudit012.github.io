function addClass(element, className){
    const arrOfClassNames = element.className.split(" ")
    if(arrOfClassNames.indexOf(className) === -1) element.className += ` ${className}`
}

function removeClass(element, className){
    element.className = element.className.replace(className, "")
}

function addClassToMultiple(elementsArray, className){
    if(elementsArray.length > 0){
        elementsArray.forEach(element => addClass(element, className))
    }
}

function removeClassFromMultiple(elementsArray, className){
    if(elementsArray.length > 0){
        elementsArray.forEach(element => removeClass(element, className))
    }
}
