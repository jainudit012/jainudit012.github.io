function carousel(numFrontItems, classConfig, dataArray){
    try{
        let nextButton = document.getElementById(classConfig.nextBtnId)
        let backButton = document.getElementById(classConfig.backBtnId)

        let counter = 0

        addClass(backButton, classConfig.disabledPaginationClass)
        
        if(dataArray.length > numFrontItems){
            removeClass(nextButton, 'hidden')
            removeClass(nextButton, classConfig.disabledPaginationClass)
        }
        
        nextButton.addEventListener('click', ()=>{
            counter++

            const currListToDisplay = dataArray[counter - 1 + numFrontItems]
            const prevListToHide = dataArray[counter - 1]
            const nextSlide = dataArray[counter + numFrontItems]

            addClass(prevListToHide, classConfig.slideAnimationClass)
            removeClass(prevListToHide, classConfig.frontClass)
            addClass(currListToDisplay, classConfig.frontClass)
            removeClass(backButton, classConfig.disabledPaginationClass)

            if(!nextSlide) {
                addClass(nextButton, classConfig.disabledPaginationClass)
                addClass(nextButton, 'hidden')
            }
        })
    
        backButton.addEventListener('click', ()=>{
            counter--

            const currListToDisplay = dataArray[counter]
            const prevListToHide = dataArray[counter + numFrontItems]

            removeClass(currListToDisplay, classConfig.slideAnimationClass)
            addClass(currListToDisplay, classConfig.frontClass)
            removeClass(prevListToHide, classConfig.frontClass)
            removeClass(nextButton, classConfig.disabledPaginationClass)
            removeClass(nextButton, 'hidden')
            if(currListToDisplay.id === dataArray[0].id) addClass(backButton, classConfig.disabledPaginationClass)
        })
    }catch(ex){
        console.log(ex)
    }
}
