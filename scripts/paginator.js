function paginate(dataArray, numItemsToShow, classConfig) {
    try{
        const nextButton = document.getElementById(classConfig.nextBtnId)
        const backButton = document.getElementById(classConfig.backBtnId)

        let counter = 0
    
        nextButton.addEventListener('click', ()=>{
            counter++
    
            const currListToDisplay = dataArray.slice(numItemsToShow*counter, numItemsToShow*(counter + 1))
            const prevListToHide = dataArray.slice(numItemsToShow*(counter - 1), numItemsToShow*counter)
    
            addClassToMultiple(prevListToHide, classConfig.toggleItemClassBack)
            removeClassFromMultiple(currListToDisplay, classConfig.toggleItemClassForward)
            removeClassFromSvg(backButton, classConfig.disabledPaginationClass)
            if(currListToDisplay.length < numItemsToShow || (currListToDisplay.length*(counter+1) === dataArray.length)) addClassToSvg(nextButton, classConfig.disabledPaginationClass)
        })
    
        backButton.addEventListener('click', ()=>{
            counter--
    
            const currListToDisplay = dataArray.slice(numItemsToShow*counter, numItemsToShow*(counter + 1))
            const prevListToHide = dataArray.slice(numItemsToShow*(counter + 1), numItemsToShow*(counter + 2))
    
            addClassToMultiple(prevListToHide, classConfig.toggleItemClassForward)
            removeClassFromMultiple(currListToDisplay, classConfig.toggleItemClassBack)
            removeClassFromSvg(nextButton, classConfig.disabledPaginationClass)
            if(currListToDisplay[0].id === dataArray[0].id) addClassToSvg(backButton, classConfig.disabledPaginationClass)
        })
    }catch(ex){
        console.log(ex)
    }
}

function otherPaginate(dataArray, classConfig, wrapper) {
    try{
        let nextButton = document.getElementById(classConfig.nextBtnId)
        let backButton = document.getElementById(classConfig.backBtnId)

        let counter = 0

        addClass(backButton, classConfig.disabledPaginationClass)
        if(dataArray.length > 1){
            removeClass(nextButton, 'hidden')
            removeClass(nextButton, classConfig.disabledPaginationClass)
        }

        if(wrapper){
            wrapper.addEventListener('filteredDataChanged', e => {
                counter = 0
                dataArray = e.detail.data
                addClass(backButton, classConfig.disabledPaginationClass)
                if(dataArray.length > 1){
                    removeClass(nextButton, 'hidden')
                    removeClass(nextButton, classConfig.disabledPaginationClass)
                }else if(dataArray.length === 1){
                    addClass(nextButton, classConfig.disabledPaginationClass)
                }else {
                    addClass(nextButton, classConfig.disabledPaginationClass)
                    addClass(backButton, classConfig.disabledPaginationClass)
                }
            }, true)
        }
        
        nextButton.addEventListener('click', ()=>{
            counter++

            const currListToDisplay = dataArray.slice(counter, (counter + 1))[0]
            const prevListToHide = dataArray.slice((counter - 1), counter)[0]
            const nextSlide = dataArray.slice((counter+1), (counter + 2))[0]
    
            addClass(prevListToHide, classConfig.slideAnimationClass)
            removeClass(prevListToHide, classConfig.frontClass)
            removeClass(currListToDisplay, classConfig.backClass)
            removeClass(currListToDisplay, classConfig.nextClass)
            addClass(currListToDisplay, classConfig.frontClass)
            removeClass(backButton, classConfig.disabledPaginationClass)

            if(nextSlide && nextSlide.className.indexOf(classConfig.slideAnimationClass) === -1) {
                addClass(nextSlide, classConfig.nextClass)
                removeClass(nextSlide, classConfig.backClass)
            }
            if(!nextSlide) {
                addClass(nextButton, classConfig.disabledPaginationClass)
                addClass(nextButton, 'hidden')
            }
        })
    
        backButton.addEventListener('click', ()=>{
            counter--

            const currListToDisplay = dataArray.slice(counter, (counter + 1))[0]
            const nextSlide = dataArray.slice((counter + 1), (counter +2))[0]
            const prevListToHide = dataArray.slice((counter+2), (counter + 3))[0]

            removeClass(currListToDisplay, classConfig.slideAnimationClass)
            addClass(currListToDisplay, classConfig.frontClass)
            removeClass(nextSlide, classConfig.frontClass)
            addClass(nextSlide, classConfig.nextClass)
            removeClass(prevListToHide, classConfig.nextClass)
            addClass(prevListToHide, classConfig.backClass)
            removeClass(nextButton, classConfig.disabledPaginationClass)
            removeClass(nextButton, 'hidden')
            if(currListToDisplay.id === dataArray[0].id) addClass(backButton, classConfig.disabledPaginationClass)
        })
    }catch(ex){
        console.log(ex)
    }
}
